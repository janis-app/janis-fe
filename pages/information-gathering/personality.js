import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Personality() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  return (
    <div className="relative">
      <Header progess={17} show={true} link="" />
      <HeaderText
        title="Discover Your Travel Energy!"
        text="Slide to your vibe! Are you the life of the party or a cozy bookworm? 🎉📚"
        subText="Keen"
      />
      <div className="mt-[190px] Introvert flex justify-between items-center h-[10px] bg-[#DAF5FE]">
        <div >
          <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
            🤫
          </div>
        </div>
        <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center  bg-[#DAF5FE]">
          <span className="w-[25px] h-[25px] rounded-full  bg-[#B9E6F5]"></span>
        </span>
        <div >
          <div className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
            🎉
          </div>
        </div>
      </div>
      <div className="mb-[175px] mt-[20px] Introvert flex justify-between items-center">
        <p className="text-sm">Introvert</p>
        <p className="text-sm">Extrovert</p>
      </div>
      <Link href="/information-gathering/interests" className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]">
        <NextButton />
      </Link>
    </div>
  );
}

export default Personality;

Personality.getLayout = function PageLayout(page) {
  return (
    <div className="white-screen-container">
      {page}
    </div>
  );
};