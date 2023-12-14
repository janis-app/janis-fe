import {
  APIProvider,
  Map,
  Marker,
  Pin,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useContext, useEffect, useState } from "react";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";
import { AppContext } from "../context/AppContext";

setDefaults({
  key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  language: "en",
  region: "es",
});

const Maps = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [Locations, setLocations] = useState([]);
  const { state } = useContext(AppContext);
  const dayPlan = state?.dayPlan?.dayPlan;
  let parsedDayPlan = dayPlan && JSON.parse(dayPlan);

  // console.log("parsedDayPlan", parsedDayPlan);
  const data = parsedDayPlan?.activities;
  const dataLocations = data?.map((d) => d?.address);
  console.log("dataLocation", dataLocations);
  let activityLocations = [];
  useEffect(() => {
    fromAddress(state?.user?.user?.infomation_gathering?.location || "New York")
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        // console.log(lat, lng);
        setLat(lat);
        setLong(lng);
      })
      .catch(console.error);
    const promises = dataLocations?.map(async (location, index) => {
      try {
        const response = await fromAddress(location || "New York");
        const { lat, lng } = response.results[0].geometry.location;
        activityLocations.push({ lat, lng });
        // console.log(index, lat, lng);
      } catch (error) {
        console.error(`Error fetching location for ${location}:`, error);
      }
    });

    // Use Promise.all to wait for all promises to resolve
    Promise.all(promises)
      .then(() => {
        console.log("All locations fetched:", activityLocations);

        // Now you can render your map component or perform other actions that depend on the populated activityLocations array
        // For example, you can set the state in a React component to trigger a re-render.
        setLocations(activityLocations);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, [state]);
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
      <div className="h-[450px]">
        <Map
          zoom={9}
          center={{ lat: lat ? lat : 0, lng: long ? long : 0 }}
          // disableDefaultUI={true}
        >
          <Marker position={{ lat: 40.711967, lng: -74.006076 }} />
          {Locations.map((location, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Marker position={{ lat: 40.711967, lng: -74.006076 }}>
                <Pin
                  background={"#22ccff"}
                  borderColor={"#1e89a1"}
                  glyphColor={"#0f677a"}
                ></Pin>
              </Marker>
            );
          })}
          <Directions dataLocations={dataLocations} />
        </Map>
      </div>
    </APIProvider>
  );
};

function Directions({dataLocations}) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: dataLocations && dataLocations[0],
        destination: dataLocations && dataLocations[dataLocations?.length - 1],
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Maps;
