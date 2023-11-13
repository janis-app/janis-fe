import NextButton from "@/components/Common/NextButton";
import BudgetItems from "@/components/InformationGathering/BudgetItems";
import DietItems from "@/components/InformationGathering/DietItems";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Budget() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  return (
    <div>
      <Header progess={80} link="diet" show={true} />
      <HeaderText
        title="Plan Your Adventure, Your Way!"
        text="What’s your daily budget?"
      />
      <BudgetItems />
      <Link
        href="/information-gathering/crew"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton />
      </Link>
    </div>
  );
}

export default Budget;

Budget.getLayout = function PageLayout(page) {
  return <div>{page}</div>;
};
