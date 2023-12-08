import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import Image from "next/image";
import animatedButton from "../public/assets/AnimatedButton.png";
import { useRouter } from "next/router";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import generate from "@/public/assets/generateBg.png";
import { useContext } from "react";
import { AppContext } from "@/components/context/AppContext";
import { generateDayPlan } from "@/utils/generateDayPlan";

function Generate() {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);

  const handleGenerateButton = async () => {
    await generateDayPlan(
      state?.user?.user?.information_gathering?.attributes ||
        state?.user?.user?.information_gathering
    )
      .then((res) => {
        router.push("/day-plan");
        dispatch({
          type: "SAVE_DAY_PLAN",
          payload: res?.data?.choices[0]?.message?.content,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-[-1]">
        <Image src={generate} className="w-full" />
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 button-bg opacity-10"></div>
      <div className="px-[24px]">
        <Header progess={100} show={true} />
        <HeaderText
          text="Let's Create Your Ideal Itinerary!"
          title="Ready for Your Perfect Day?"
          color="white"
        />
        <div
          className="mt-[10rem] z-[1000] relative"
          onClick={handleGenerateButton}
        >
          <Image src={animatedButton} alt="" />
        </div>
      </div>
    </div>
  );
}

// export default Generate;
export default withAuthProtection(Generate);
Generate.getLayout = function PageLayout(page) {
  return <div className="generate-container">{page}</div>;
};
