import React, { useState } from "react";

function CrewItem() {
  const [radioValue, setRadioValue] = useState(false);
  return (
    <div>
      <div className={`mt-[20px]`}>
        <div className="w-full">
          <div>
            {data.map((item, index) => {
              return (
                <label
                  className={`w-full h-[72px] py-[30px] px-[20px] border-2 border-[#DAF5FE] flex items-center rounded-[40px] mb-[8px] gap-[16px] ${
                    item.title == radioValue ? "bg-[#DAF5FE]" : "bg-transparent"
                  }`}
                  key={index}
                  onClick={() => setRadioValue(item.title)}
                >
                  <input
                    type="radio"
                    name="radio"
                    className={`w-[24px] h-[24px]`}
                    checked={item.title == radioValue}
                  />
                  <div className={`text-left font-medium`}>
                    <p className="text-[14px]">{item.title}</p>
                    <p className="text-[10px]">{item.subTitle}</p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewItem;

const data = [
  {
    title: "🧳 Solo",
  },
  {
    title: "👨‍👩‍👦 Family",
  },
  {
    title: "👬 Friends",
  },
  {
    title: "👫Couple",
  },
];
