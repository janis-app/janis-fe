import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Interest() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  return (
    <div className="relative">
      <Header link="information-gathering/personality" show={true} progess={32} />
      <HeaderText
        title="What are you keen about?"
        text="Pick your play! What activities make you jump out of bed? 🏄‍♀️🧘‍♂️
        "
      />
      <InterestItems />
      <Link
        href="/information-gathering/vehicles"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton />
      </Link>
    </div>
  );
}

export default Interest;

Interest.getLayout = function PageLayout(page) {
    return (
      <div className="white-screen-container">
        {page}
      </div>
    );
  };