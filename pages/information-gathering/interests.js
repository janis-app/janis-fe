import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";
import userStore from "@/store/userSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Interest() {
  const router = useRouter();
  const [selectedBtn, setSelectedBtn] = useState([]);

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
            Interests: selectedBtn.toString(),
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
        router.push("/information-gathering/vehicles");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative mx-[24px]">
      <Header
        link="information-gathering/personality"
        show={true}
        progess={32}
      />
      <HeaderText
        title="What are you keen about?"
        text="Pick your play! What activities make you jump out of bed? 🏄‍♀️🧘‍♂️
        "
      />
      <InterestItems
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      />
      <div
        // href="/information-gathering/vehicles"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Interest;
export default withAuthProtection(Interest);

Interest.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
