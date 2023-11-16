import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import map from "../../public/assets/Subtract.png";
import { BiSolidMap } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import NextButton from "@/components/Common/NextButton";
import { useState } from "react";

function Mood() {
  const [radioValue, setRadioValue] = useState(false);
  return (
    <div>
      <Header show={false} progess={32} />
      <HeaderText
        title="How Keen are you today?"
        text="Let us know about your current mood"
      />
      <div className={`mt-[80px]`}>
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
                <p className="text-[16px]">{item.title}</p>
                <p className="text-[14px] text-[#7A7676]">{item.subTitle}</p>
              </div>
            </label>
          );
        })}
      </div>
      <Link
        href="/generate"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton />
      </Link>
    </div>
  );
}

export default Mood;

const data = [
  {
    title: "😌 Chill",
    subTitle: "For a laid-back, relaxing day",
  },
  {
    title: "🙂 Balanced",
    subTitle: "A mix of relaxation and adventure",
  },
  {
    title: "🤪 Thrilled",
    subTitle: "Adrenaline-packed day full of activity",
  },
];

Mood.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
