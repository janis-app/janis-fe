import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import { AppContext } from "@/components/context/AppContext";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";
import { fetchUserProfile } from "@/lib/profile";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

function Personality() {
  const router = useRouter();
  const [value, setValue] = useState();
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const personalityValue =
    state?.user?.user?.information_gathering?.personality;
  useEffect(() => {
    setValue(parseInt(personalityValue));
  }, [state]);

  const handleBtnClick = async () => {
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios({
      url: state?.user?.user?.information_gathering
        ? process.env.NEXT_PUBLIC_STRAPI_URL +
          `/information-gatherings/${state?.user?.user?.information_gathering?.id}`
        : process.env.NEXT_PUBLIC_STRAPI_URL + `/information-gatherings`,
      method: state?.user?.user?.information_gathering ? "put" : "post",
      data: {
        data: {
          personality: value.toString(),
          users_permissions_user: state?.user?.user
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      // .put(
      //   process.env.NEXT_PUBLIC_STRAPI_URL +
      //     `/information-gatherings/${state?.user?.user?.information_gathering?.id}`,
      //   {
      //     data: {
      //       personality: value,
      //     },
      //   },
      //   {
      //     headers: {
      //       Authorization: "Bearer " + token,
      //     },
      //   }
      // )
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        dispatch({
          type: "UPDATE_USER_INFOMATION_GATHERING",
          payload: res?.data?.data,
        });
        router.push("/information-gathering/interests");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative px-[24px]">
      <Header progess={17} show={true} link="" />
      <HeaderText
        title="Discover Your Travel Energy!"
        text="Slide to your vibe! Are you the life of the party or a cozy bookworm? 🎉📚"
        subText="Keen"
      />
      <div className="mt-[190px] Introvert flex justify-between items-center  ">
        <div>
          <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
            🤫
          </div>
        </div>

        {/* <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-[#DAF5FE]">
          <span className="w-[25px] h-[25px] rounded-full  bg-[#B9E6F5]"></span>
        </span> */}
        <input
          type="range"
          className="w-full "
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={0}
          max={100}
          step={50}
        />
        <div>
          <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE] ">
            🎉
          </div>
        </div>
      </div>
      <div className="mb-[175px] mt-[20px] Introvert flex justify-between items-center">
        <p className="text-sm">Introvert</p>
        <p className="text-sm">Extrovert</p>
      </div>
      <div
        // href="/information-gathering/interests"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Personality;
export default withAuthProtection(Personality);

Personality.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
