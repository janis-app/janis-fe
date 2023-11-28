import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Vehicle() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  return (
    <div>
      <Header progess={53} link="information-gathering/interests" show={true} />
      <HeaderText
        title="How do you roll?"
        text="Choose your go-to wheels or walks 🚗🚶
        "
      />
      <VehicleItems />
      <Link
        href="/information-gathering/diet"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton />
      </Link>
    </div>
  );
}

// export default Vehicle;
export default withAuthProtection(Vehicle);


Vehicle.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
