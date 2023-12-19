import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import map from "../../public/assets/Subtract.png";
import { BiSolidMap } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import NextButton from "@/components/Common/NextButton";
import { useContext, useEffect, useState } from "react";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import axios from "axios";
import { getTokenFromLocalCookie } from "@/lib/auth";

import { useRouter } from "next/router";
import { AppContext } from "@/components/context/AppContext";

function Mood() {
  const [radioValue, setRadioValue] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const informations =
    state?.user?.user?.information_gathering?.attributes ||
    state?.user?.user?.information_gathering;
  useEffect(() => {
    setRadioValue(informations?.mood);
  }, [state]);
  useEffect(() => {
    setRadioValue("");
  }, [state]);
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
          mood: radioValue,
          users_permissions_user: state?.user?.user,
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        setLoading(false);
        router.push("/generate");
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
    <div className="mx-[24px]">
      <div className="px-[20px]">
        <Header show={false} progess={32} />
      </div>
      <div className="relative z-[2] text-center flex flex-col justify-center items-center font-[500]">
        <h3 className="text-[20px] leading-[24.2px]">
          How <span className="text-[#B9E6F5]">Keen</span> are you today?
        </h3>
        <p className="text-[16px] leading-[19.36px] text-[#7A7676] mt-[8px]">
          Let us know about your current mood
        </p>
      </div>
      <div className={`mt-[80px]`}>
        {data.map((item, index) => {
          return (
            <label
              className={`w-full h-[72px] py-[30px] px-[20px] border-2 border-[#DAF5FE] flex items-center rounded-[40px] mb-[8px] gap-[16px] ${
                item.title == radioValue ? "bg-[#DAF5FE]" : "bg-transparent"
              }`}
              key={index}
              onClick={() => setRadioValue(item.title)}
            >
              <input
                type="radio"
                name="radio"
                className={`w-[24px] h-[24px]`}
                checked={item.title == radioValue}
              />
              <div className={`text-left font-medium`}>
                <p className="text-[16px]">{item.title}</p>
                <p className="text-[14px] text-[#7A7676]">{item.subTitle}</p>
              </div>
            </label>
          );
        })}
      </div>
      <div
        // href="/generate"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Mood;
export default withAuthProtection(Mood);

const data = [
  {
    title: "😌 Chill",
    subTitle: "For a laid-back, relaxing day",
  },
  {
    title: "🙂 Balanced",
    subTitle: "A mix of relaxation and adventure",
  },
  {
    title: "🤪 Thrilled",
    subTitle: "Adrenaline-packed day full of activity",
  },
];

Mood.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
