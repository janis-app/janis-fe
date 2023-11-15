import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import map from "../../public/assets/Subtract.png";
import { BiSolidMap } from "react-icons/bi";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import NextButton from "@/components/Common/NextButton";

function Location() {
  return (
    <div>
      <Header show={false} progess={32} />
      <HeaderText
        title="Let’s start Your Adventure!"
        text="Share Your Starting Point"
      />
      <div className="bg-white mt-[51px] mb-[3rem] h-[300px] z-[1] absolute top-[-3.3rem] left-0 right-0 rounded-br-[50px] rounded-bl-[50px] px-[24px]">
        <div className="relative">
          <input
            className="h-[56px] border-2 border-[#DAF5FE] outline-none px-[16px] py-[8px] rounded-[8px] relative top-[11rem] w-full flex justify-center"
            placeholder="Enter your Location"
          />
          <BiSolidMap
            className="absolute top-[12.2rem] right-[19px]"
            color="#B9E6F5"
            size={18}
          />
        </div>
      </div>
      <div className="fixed bottom-0 w-full left-0 right-0">
        <Image src={map} alt="map" className="w-full" />
      </div>
      <Link
        href="/start-adventure/mood"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton />
      </Link>
    </div>
  );
}

export default Location;

Location.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
