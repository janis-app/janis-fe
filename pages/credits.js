import RegisterHeader from "@/components/RegisterComponent/RegisterHeader";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Credits() {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="px-[20px]"><RegisterHeader step={5} link={`/register`} /></div>
      <div className="bg-white w-[54px] h-[5px] rounded-[30px] mx-auto relative top-[-8px]" />
      <div className="h-[673px] fixed bottom-0 top-[135px] left-0 right-0 bg-white rounded-tl-[32px] rounded-tr-[32px] px-[24px] pt-[100px] flex flex-col items-center text-[28px] font-[700]">
        <p className="text-[40px] mb-[35px]">✅</p>
        <div className="text-center text-[#404148] max-w-[327px] leading-[39px]">
          <p>Perfect!</p>
          <p>
            You get <span className="text-[#B9E6F6]">5 Credits</span> for your
            first adventures!
          </p>
          <p className="font-[400]  text-[16px] leading-[24px] text-[#7C7D81] mt-[8px]">
            To make sure your day plans align with you, set up your profile in
            the next step.
          </p>
        </div>
      </div>
      <div
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
        onClick={() => {
          router.push("/setup-profile");
        }}
      >
        <button className="bg-white w-[240px] h-[52px] rounded-[40px] flex items-center justify-center gap-[6px] text-[16px] font-medium leading-[19.36px]">
          Next <FaArrowRightLong size={13} />
        </button>
      </div>
    </div>
  );
}

export default Credits;
