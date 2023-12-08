import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import map from "../../public/assets/Subtract.png";
import { BiSolidMap } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import NextButton from "@/components/Common/NextButton";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { getTokenFromLocalCookie } from "@/lib/auth";
import axios from "axios";
import { AppContext } from "@/components/context/AppContext";

function Location() {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [location, setLoacation] = useState("");

  const informations = state?.user?.user?.information_gathering?.attributes || state?.user?.user?.information_gathering;
  useEffect(()=>{
setLoacation(informations?.location)
  }, [state])

  const handleBtnClick = async () => {
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios({
      url: state?.user?.user?.information_gathering?.id
        ? process.env.NEXT_PUBLIC_STRAPI_URL +
          `/information-gatherings/${state?.user?.user?.information_gathering?.id}`
        : process.env.NEXT_PUBLIC_STRAPI_URL + `/information-gatherings`,
      method: state?.user?.user?.information_gathering ? "put" : "post",
      data: {
        data: {
          location,
          users_permissions_user: state?.user?.user,
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        setLoading(false);
        router.push("/start-adventure/mood");
        if (res) {
          dispatch({
            type: "UPDATE_USER_INFOMATION_GATHERING",
            payload: res?.data?.data,
          });
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="px-[20px]">
        <Header show={false} progess={32} />
      </div>
      <HeaderText
        title="Let’s start Your Adventure!"
        text="Share Your Starting Point"
      />
      <div className="bg-white mt-[51px] mb-[3rem] h-[300px] z-[1] absolute top-[-3.3rem] left-0 right-0 rounded-br-[50px] rounded-bl-[50px] px-[24px]">
        <div className="relative">
          <input
            className="h-[56px] border-2 border-[#DAF5FE] outline-none px-[16px] py-[8px] rounded-[8px] relative top-[11rem] w-full flex justify-center"
            placeholder="Enter your Location"
            value={location}
            onChange={(e) => setLoacation(e.target.value)}
          />
          <BiSolidMap
            className="absolute top-[12.2rem] right-[19px]"
            color="#B9E6F5"
            size={18}
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-full left-0 right-0">
        <Image src={map} alt="map" className="w-full" />
      </div>
      <div
        // href="/start-adventure/mood"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Location;
export default withAuthProtection(Location);

Location.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
