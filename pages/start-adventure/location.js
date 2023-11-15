import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import map from "../../public/assets/Subtract.png";

function Location() {
  return (
    <div>
      <Header show={false} progess={32} />
      <HeaderText
        title="Let’s start Your Adventure!"
        text="Share Your Starting Point"
      />
      <div className="bg-white mt-[51px] mb-[3rem]">
        <input
          className="w-full h-[40px] border-2 border-[#DAF5FE] outline-none px-[16px] py-[8px] rounded-[8px]"
          placeholder="Enter your Location"
        />
      </div>
      <div className="fixed bottom-0 w-full left-0 right-0">
        <Image src={map} alt="map" className="w-full" />
      </div>
    </div>
  );
}

export default Location;

Location.getLayout = function PageLayout(page) {
  return <div>{page}</div>;
};
