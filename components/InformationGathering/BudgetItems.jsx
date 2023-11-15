import React, { useState } from "react";

function BudgetItems() {
  const [value, setValue] = useState(50);
  return (
    <div className="mt-[35px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
          💰
        </span>
        <div className=" bg-[#] h-[314px] flex justify-center items-center">
        <input
          type="range"
          className="bg-[#DAF5FE] !h-[314px] w-[314px] outline-none rotate-90"
          value={value}
          min={0}
          max={100}
          step={1}
          onChange={(e)=>setValue(e.target.valueAsNumber)}
        />
        </div>
        <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
          🪙
        </span>
      </div>
    </div>
  );
}

export default BudgetItems;
