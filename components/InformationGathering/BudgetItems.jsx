import React, { useState } from "react";

function BudgetItems() {
  const [value, setValue] = useState(50);
  return (
    <div className="mt-[35px] flex justify-center items-center relative">
      <div className="flex flex-col items-center justify-between h-[270px] relative left-[6rem]">
        <p className=" text-[14px] font-[500] absolute top-[-3.5rem]">
          &gt;100€
        </p>
        <p
          className="absolute inset-0 text-[#B9E6F5]"
          style={{ top: `${value - 5}%`, marginTop: value > 59 && "5px" }}
        >
          {100 - value}€
        </p>
        <p className=" text-[14px] font-[500] absolute bottom-[-3.5rem]">0€</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
            💰
          </span>
        </div>
        <div className=" bg-[#] h-[314px] flex justify-center items-center relative">
          <input
            type="range"
            className="bg-[#DAF5FE] !h-[314px] w-[314px] outline-none rotate-90 relative"
            value={value}
            min={0}
            max={100}
            step={1}
            onChange={(e) => setValue(e.target.valueAsNumber)}
          />
        </div>
        <div className="relative">
          <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
            🪙
          </span>
        </div>
      </div>
    </div>
  );
}

export default BudgetItems;
