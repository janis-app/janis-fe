import NextButton from "@/components/Common/NextButton";
import DietItems from "@/components/InformationGathering/DietItems";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Diet() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  return (
    <div className="px-[24px]">
      <Header progess={68} link="information-gathering/vehicles" show={true} />
      <HeaderText
        title="Are you a picky eater?"
        text="Tell us about your food preferences!"
      />
      <DietItems/>
      <Link
        href="/information-gathering/budget"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton />
      </Link>
    </div>
  );
}

// export default Diet;
export default withAuthProtection(Diet);


Diet.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
