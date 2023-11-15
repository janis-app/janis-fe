"use client";
import { useState } from "react";

function VehicleItems() {
  const [radioValue, setRadioValue] = useState(false);

  return (
    <>
      <div className={`mt-[20px]`}>
        <div className="w-full">
          <div>
            {data.map((item, index) => {
              return (
                <label
                  className={`w-full h-[72px] py-[30px] px-[20px] border-2 border-[#DAF5FE] flex items-center rounded-[40px] mb-[8px] ${
                    item.title == radioValue
                      ? "bg-[#DAF5FE]"
                      : "bg-transparent"
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
                  <div className={`w-[181px] text-center mx-auto font-medium`}>
                    <p className="text-[14px]">{item.title}</p>
                    <p className="text-[10px]">{item.subTitle}</p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleItems;

const data = [
  {
    title: "🚗 Car",
    subTitle: "Well map out the ultimate road trip just around your corner!",
  },
  {
    title: "🏍️ Bike ",
    subTitle:
      "Two wheels, endless curves...Discover the curviest roads near you!",
  },
  {
    title: "🚌 Bus  ",
    subTitle:
      "Sit back and relax! Well find the cheapest and quickest bus for you!",
  },
  {
    title: "🚶Walk ",
    subTitle: "Well guide you to hidden gems, just a walk away!",
  },
  {
    title: "🚆 Train",
    subTitle: "Get the best train routes and fares to fuel your wanderlust!",
  },
];
