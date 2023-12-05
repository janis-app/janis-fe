import NextButton from "@/components/Common/NextButton";
import DietItems from "@/components/InformationGathering/DietItems";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";
import userStore from "@/store/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Diet() {
  const router = useRouter();
  const [dietType, setDietType] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [lactose, setLactose] = useState(false);
  const [gluten, setGluten] = useState(false);
  const [fructose, setFructose] = useState(false);
  const { user_profile } = userStore();
  const [loading, setLoading] = useState(false);

  const handleBtnClick = async () => {
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios
      .put(
        process.env.NEXT_PUBLIC_STRAPI_URL +
          `/information-gatherings/${user_profile?.information_gathering?.id}`,
        {
          data: {
            diet_type: dietType,
            cuisine_type: cuisineType,
            lactose_intolerance: lactose,
            gluten_intolerance: gluten,
            fructose_intolerance: fructose,
          },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        setLoading(false);
        router.push("/information-gathering/budget");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mx-[24px]">
      <Header progess={68} link="information-gathering/vehicles" show={true} />
      <HeaderText
        title="Are you a picky eater?"
        text="Tell us about your food preferences!"
      />
      <DietItems
        lactose={lactose}
        setLactose={setLactose}
        gluten={gluten}
        setGluten={setGluten}
        fructose={fructose}
        setFructose={setFructose}
        setDietType={setDietType}
        setCuisineType={setCuisineType}
        dietType={dietType}
        cuisineType={cuisineType}
      />
      <div
        // href="/information-gathering/budget"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Diet;
export default withAuthProtection(Diet);

Diet.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
