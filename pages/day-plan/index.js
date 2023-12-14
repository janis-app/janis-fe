"use client";
import Header from "@/components/InformationGathering/Header";
import React, { useContext, useEffect, useState } from "react";
import profile from "@/public/assets/profileImg.svg";
import styles from "@/styles/day-plan/day-plan.module.css";
import Image from "next/image";
import location from "@/public/assets/location.svg";
import mdi_like from "@/public/assets/mdi_like.svg";
import cardImg1 from "@/public/assets/cardimg1.svg";
import cardImg2 from "@/public/assets/cardImg2.svg";
import cardImg3 from "@/public/assets/cardImg3.svg";
import cardImg4 from "@/public/assets/cardImg4.svg";
import arrow from "@/public/assets/arrowright.svg";
import darkArrow from "@/public/assets/darkArrow.svg";
import mask1 from "@/public/assets/Mask.png";
import mask2 from "@/public/assets/Mask1.png";
import mask3 from "@/public/assets/Mask2.png";
import sun from "@/public/assets/sun.svg";
import track from "@/public/assets/track.png";
import box from "@/public/assets/box.png";
import arrow1 from "@/public/assets/arrow.png";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import {
  fetchFavouriteActivitiesApi,
  updateFavouriteActivitiesApi,
} from "@/lib/profile";
import { AppContext } from "@/components/context/AppContext";

function DayPlan() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState(null);
  const [foodIndex, setFoodIndex] = useState(null);
  const { state, dispatch } = useContext(AppContext);
  const [weatherData, setWeatherData] = useState(null);
  const [temp , setTemp] = useState()

  const [favoriteActivities, setFavoriteActivities] = useState(null);

  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responcedata = await fetchFavouriteActivitiesApi();
  //     // setFavoriteActivities(responcedata?.data[0])
  //   };

  //   fetchData();
  // }, []);

 

  
const api = {
  key: "2319db5d5fab225d5c9d6cd5a01b577c",
  lat: state?.user?.user?.information_gathering?.lat,
  long: state?.user?.user?.information_gathering?.long,
};
// console.log(state?.user?.user?.information_gathering.lat)
// console.log(state?.user?.user?.information_gathering?.long)

const searchPressed = () => {
  // console.log('lat',state?.user?.user?.information_gathering?.lat)
  // console.log('long',api.long);
  if(api.lat && api.long){

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.long}&appid=${api.key}&units=metric`)
    .then((res) => res.json())
    .then((result) => {
      setWeatherData(result);
      setTemp(parseInt(weatherData?.main?.temp))
    });
    // console.log("weather data =>", weatherData?.main?.temp)
    // console.log("weather data =>", weatherData?.weather[0]?.main)
    // console.log("temp is ", temp)
  };
}

useEffect(()=>{
  searchPressed()
}, [state?.user?.user])


  // console.log("favoriteActivities: ", favoriteActivities);

  const accordionHandler = (index) => {
    setIsTextVisible(!isTextVisible);
    setUpdatedIndex(index);
  };

  const updateFavouriteActivites = async (id) => {
    const existingActivities = favoriteActivities?.attributes?.activities || [];

    // Check if the id exists in the array
    const isIdExist = existingActivities.includes(id);

    // If the id exists, filter it out; otherwise, add it
    const updatedActivities = isIdExist
      ? existingActivities.filter((activityId) => activityId !== id)
      : [...existingActivities, id];

    const data = {
      activities: updatedActivities,
    };

    const res = await updateFavouriteActivitiesApi(
      favoriteActivities?.id,
      data
    );

    if (res?.data?.id) setFavoriteActivities(res?.data);
  };

  const colorHandler = (index) => {
    setFoodIndex(index);
  };

  const dayPlan = state?.dayPlan?.dayPlan;
  let parsedDayPlan = dayPlan && JSON.parse(dayPlan);

  // console.log("parsedDayPlan", parsedDayPlan);
  const data = parsedDayPlan?.activities;

  const menu = [
    {
      title: "Food",
      subTitle: "3 locations",
      img: cardImg1,
    },
    {
      title: "Activities",
      subTitle: "2 locations",
      img: cardImg2,
    },
    {
      title: "Viewpoints",
      subTitle: "4 locations",
      img: cardImg3,
    },
    {
      title: "Breaks",
      subTitle: "2 locations",
      img: cardImg4,
    },
  ];
  return (
    <div className={styles.main_container}>
      <div className="absolute left-[3rem] top-[6rem]">
        <Image src={track} alt="track" />
      </div>
      <div style={{ margin: "0px 24px" }}>
        <Header progess={17} link="" profile={profile} />
      </div>
      <div className={styles.conatiner}>
        <div className="flex justify-between">
          <div>
            <h2 style={{ fontWeight: 600 }}>
              {state?.user?.user?.username}’s Day Plan
            </h2>
            <p className={styles.location}>
              <Image
                src={location}
                width={20}
                height={20}
                alt="location icon"
              />
              {state?.user?.user?.information_gathering?.attributes?.location ||
                state?.user?.user?.information_gathering?.location}
            </p>
          </div>
          {/* <div className={styles.mdi_like}>
            <Image src={mdi_like} width={24} height={24} alt="location icon" />
          </div> */}
          <div className={styles.temp_div}>
            <div
              style={{
                alignItems: "flex-end",
                border: "1px solid white",
                backgroundColor: "#A1DBEF",
                borderRadius: "50%",
                position: "relative",
                top: -4,
                left: 18,
              }}
            >
              <Image src={sun} width={18} height={18} alt="sun image" />
            </div>
            <p style={{ display: "flex", fontSize: 14, marginTop: -8 }}>{`${temp}°`}</p>
            <p style={{ fontSize: 8, padding: 0, margin: 0, color: "#fff" }}>
              {weatherData?.weather[0]?.main}
            </p>
          </div>
        </div>

        <hr style={{ margin: "16px 0px", color: "#DDE3EA" }} />

        <div className="flex justify-between">
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Time</p>
            <p style={{ fontWeight: 600 }}>8.5h</p>
          </div>
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Distance</p>
            <p style={{ fontWeight: 600 }}>57km</p>
          </div>
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Budget</p>
            <p style={{ fontWeight: 600 }}>
              {state?.user?.user?.information_gathering?.attributes?.budget ||
                state?.user?.user?.information_gathering?.budget}
              €
            </p>
          </div>
          <div className={styles.time_card}>
            <p style={{ color: "#7B8487", fontSize: 10 }}>Transport</p>
            <p style={{ fontWeight: 600 }}>
              {state?.user?.user?.information_gathering?.attributes?.preferred_vehicle?.match(
                emojiRegex
              ) ||
                state?.user?.user?.information_gathering?.preferred_vehicle?.match(
                  emojiRegex
                )}
            </p>
          </div>
        </div>

        <hr style={{ margin: "16px 0px", color: "#DDE3EA" }} />

        <p style={{ fontSize: 14, fontWeight: 400, color: "#B0B6BF" }}>
          Embark on a day of volcanic vistas, serene reservoir retreats, and
          sunsets on sandy shores in Las Palmas.Your camera and soul will thank
          you!
        </p>
      </div>
      <div className={styles.sub_container}>
        {menu.map((items, index) => {
          return (
            <>
              <div
                // onClick={() => colorHandler(index)}
                className={styles.card}
                key={index}
                style={{
                  backgroundColor: foodIndex == index ? "#22B1D1" : "#fff",
                }}
              >
                <div className="flex items-center">
                  <div
                    // style={{ backgroundColor: foodIndex == index ? "#fff" : "#E3F4FA" }}
                    className={styles.img_div}
                  >
                    <Image
                      src={items.img}
                      width={23}
                      height={23}
                      alt="degree icon"
                    />
                  </div>
                  <div style={{ marginLeft: 12 }}>
                    <p style={{ fontWize: 500 }}>{items.title}</p>
                    <p style={{ fontWize: 400, fontSize: 12 }}>
                      {items.subTitle}
                    </p>
                  </div>
                </div>
                <Image
                  style={{ color: "#ABB0AF" }}
                  src={foodIndex == index ? arrow : darkArrow}
                  width={24}
                  height={24}
                  alt="rights arrow"
                />
              </div>
            </>
          );
        })}
      </div>

      <div className="sidebar px-[20px] mt-[20px] flex items-start">
        <div className={`mr-[15px] ${styles.sidebar}`}>
          <div className={styles.sidebar_line} style={{ height: 32 }}></div>
          <div className={styles.sidebar_circle}></div>
          {data?.map((item) => (
            <>
              <div className={styles.sidebar_line} style={{ height: 85 }}></div>
              <div className={styles.sidebar_circle}></div>
            </>
          ))}
             <div className={styles.sidebar_line} style={{ height: 85 }}></div>
              {/* <div className={styles.sidebar_circle}></div> */}
          <div className={styles.sidebar_circle}></div>
          <div className={styles.sidebar_line} style={{ height: 32 }}></div>
        </div>
        <div className="mr-[4px]">
          {data?.map((items, index) => {
            const isActivityExist =
              favoriteActivities &&
              favoriteActivities?.attributes?.activities?.find(
                (act) => act == items.id
              );
            console.log("isActivityExist: ", isActivityExist);

            return (
              <div
                // onClick={() => accordionHandler(index)}
                key={index}
                className={`${
                  index == updatedIndex ? "bg-[#DAF5FE]" : "bg-transparent"
                } w-auto p-[15px] mt-[12px] rounded-[10px] border-2 border-[#DAF5FE]`}
              >
                <div className="flex justify-between items-start relative mb-2">
                  <p style={{ fontWize: 500, fontSize: 15 }} className="w-[70%]">{items.title}</p>
                  <p style={{ fontSize: 13 }}>{items.time}</p>

                  <div
                    onClick={() => updateFavouriteActivites(items.id)}
                    className={`${styles.mdi_like} ${
                      isActivityExist ? "bg-[#DAF5FE]" : "bg-[#FFF]"
                    } `}
                  >
                    <Image
                      src={mdi_like}
                      width={20}
                      height={20}
                      alt="location icon"
                    />
                  </div>
                </div>

                {/* {isTextVisible && updatedIndex == index ? ( */}
                <>
                  <p style={{ fontSize: 12, color: "#7A7676" }}>{items.disc}</p>
                  <div className="flex items-center">
                    <Image
                      className={styles.sub_img}
                      src={mask1}
                      width={43}
                      height={43}
                      alt="rights arrow"
                    />
                    <Image
                      className={styles.sub_img}
                      src={mask2}
                      width={43}
                      height={43}
                      alt="rights arrow"
                    />
                    <Image
                      className={styles.sub_img}
                      src={mask3}
                      width={43}
                      height={43}
                      alt="rights arrow"
                    />
                  </div>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withAuthProtection(DayPlan);
