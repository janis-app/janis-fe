import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";
import userStore from "@/store/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Vehicle() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const {user_profile} = userStore()

  const handleBtnClick = async () => {
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios
      .put(
        process.env.NEXT_PUBLIC_STRAPI_URL +
          `/information-gatherings/${user_profile?.information_gathering?.id}`,
        {
          data: {
            preferred_vehicle: value,
          },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        setLoading(false);
        router.push("/information-gathering/diet")
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="px-[24px]">
      <Header progess={53} link="information-gathering/interests" show={true} />
      <HeaderText
        title="How do you roll?"
        text="Choose your go-to wheels or walks 🚗🚶
        "
      />
      <VehicleItems value={value} setValue={setValue} />
      <div
        // href="/information-gathering/diet"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Vehicle;
export default withAuthProtection(Vehicle);


Vehicle.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
