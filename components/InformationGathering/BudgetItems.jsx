import React from "react";

function BudgetItems() {
  return (
    <div className="mt-[54px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
          💰
        </span>
        <div className="w-[9px] bg-[#DAF5FE] h-[314px]" />
        <span className="w-[46px] h-[46px] rounded-full flex justify-center items-center bg-[#DAF5FE]">
          🪙
        </span>
      </div>
    </div>
  );
}

export default BudgetItems;
