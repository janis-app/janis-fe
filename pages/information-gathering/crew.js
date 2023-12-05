import NextButton from "@/components/Common/NextButton";
import BudgetItems from "@/components/InformationGathering/BudgetItems";
import CrewItem from "@/components/InformationGathering/CrewItem";
import DietItems from "@/components/InformationGathering/DietItems";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";
import Spinner from "@/lib/spinner";
import userStore from "@/store/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

function Crew() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const { user_profile } = userStore();
  const [loading, setLoading] = useState(false);

  const handleBtnClick = async () => {
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios
      .put(
        process.env.NEXT_PUBLIC_STRAPI_URL +
          `/information-gatherings/${user_profile?.information_gathering?.id}`,
        {
          data: {
            personality: "Edited Now",
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
        router.push("/start-adventure/location");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mx-[24px]">
      <Header progess={100} link="information-gathering/budget" show={true} />
      <HeaderText
        title="Who's Your Adventure Crew?"
        text="Crafted Exclusively for Your Travel Crew!"
      />
      <CrewItem value={value} setValue={setValue} />
      <div
        // href="/start-adventure/location"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <button
          className="bg-white w-[240px] h-[52px] rounded-[40px] flex items-center justify-center gap-[6px] text-[16px] font-medium leading-[19.36px]"
          onClick={handleBtnClick}
        >
          {loading ? (
            <Spinner colour="#B9E6F5" />
          ) : (
            <>
              Confirm <FiCheck size={13} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// export default Crew;
export default withAuthProtection(Crew);

Crew.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
