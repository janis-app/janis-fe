import Spinner from "@/lib/spinner";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function NextButton({ handleClick, loading }) {
  return (
    <button
      className="bg-white w-[240px] h-[52px] rounded-[40px] flex items-center justify-center gap-[6px] text-[16px] font-medium leading-[19.36px]"
      onClick={handleClick}
    >
      {loading ? (
        <Spinner colour="#DAF5FE" />
      ) : (
        <>
          Next <FaArrowRightLong size={13} />
        </>
      )}
    </button>
  );
}

export default NextButton;
