import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import animatedButton from "../public/assets/AnimatedButton.png";

function Generate() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 right-0 left-0 bottom-0 button-bg opacity-10"></div>
      <div className="px-[24px]">
        <Header progess={100} show={true} />
        <HeaderText
          text="Let's Create Your Ideal Itinerary!"
          title="Ready for Your Perfect Day?"
          color="white"
        />
        <div className="mt-[10rem]">
          <Image src={animatedButton} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Generate;

Generate.getLayout = function PageLayout(page) {
  return <div className="generate-container">{page}</div>;
};
