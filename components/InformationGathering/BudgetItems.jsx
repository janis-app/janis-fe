import React, { useState } from "react";
import coin from "@/public/assets/coin.svg"
import Image from "next/image";

function BudgetItems() {
  const [value, setValue] = useState(50);
  return (
    <>
      {/* <div className="mt-[35px] flex flex-col justify-center items-center relative">
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
      </div> */}
      <div className="flex flex-col items-center justify-between mt-[35px] relative">
        <div className="flex">
          <p className="absolute left-[30%] top-[25px]">100€</p>
          <div className="flex items-center justify-center bg-[#DAF5FE] h-[46px] w-[46px] rounded-full	">
            💰
          </div>
        </div>
        <div className="bg-[#DAF5FE] h-[334px] w-[7px] flex flex-col items-center justify-between mt-[15px]">
          <div className="flex items-center">
            <p className="text-[#DAF5FE] absolute left-[35%] mt-[100px]">50€</p>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center   bg-[#DAF5FE] mt-[100px]">
              <div className="w-[25px] h-[25px] rounded-full  bg-[#B9E6F5]"></div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="absolute left-[35%] ">0€</p>
            <div className="flex items-center justify-center bg-[#DAF5FE] h-[46px] w-[46px] rounded-full	">
              <Image
                src={coin}
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default BudgetItems;
