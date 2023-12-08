import React, { useState } from "react";
import coin from "@/public/assets/coin.svg"
import Image from "next/image";

function BudgetItems({value , setValue}) {
  return (
    <>
      <div className="mt-[35px] flex flex-col justify-center items-center relative">
        <div className="flex bg-[#000] flex-col items-center justify-between h-[270px] absolute left-[6rem]">
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
          <div className="relative z-[9999]">
            <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
              💰
            </span>
          </div>
          <div className=" bg-[transparent] h-[314px] flex justify-center items-center relative">
            <input
              type="range"
              className="bg-[#DAF5FE] !h-[314px] w-[314px] outline-none rotate-90 relative"
              value={value}
              min={0}
              max={100}
              step={1}
              onChange={(e) => setValue(100 - e.target.valueAsNumber)}
            />
          </div>
          <div className="relative">
            <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
              <Image
                src={coin}
                height={24}
                width={24}
              />

            </span>
          </div>
        </div>
      </div>    
    </>
  );
}

export default BudgetItems;
