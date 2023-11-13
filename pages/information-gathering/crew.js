import NextButton from "@/components/Common/NextButton";
import BudgetItems from "@/components/InformationGathering/BudgetItems";
import CrewItem from "@/components/InformationGathering/CrewItem";
import DietItems from "@/components/InformationGathering/DietItems";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

function Crew() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  return (
    <div>
      <Header progess={100} link="budget" show={true}/>
      <HeaderText
        title="Plan Your Adventure, Your Way!"
        text="What’s your daily budget?"
      />
      <CrewItem />
      <Link
        href="/start-adventure/location"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <button className="bg-white w-[240px] h-[52px] rounded-[40px] flex items-center justify-center gap-[6px] text-[16px] font-medium leading-[19.36px]">
          Confirm <FiCheck size={13} />
        </button>
      </Link>
    </div>
  );
}

export default Crew;

Crew.getLayout = function PageLayout(page) {
  return <div>{page}</div>;
};
