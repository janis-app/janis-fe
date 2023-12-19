import NextButton from "@/components/Common/NextButton";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import { AppContext } from "@/components/context/AppContext";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

function Interest() {
  const searchParams = useSearchParams()
 
  const query = searchParams.get('ref')
  console.log("Search Param: ", query);
  const router = useRouter();
  const [selectedBtn, setSelectedBtn] = useState([]);
  const { state, dispatch } = useContext(AppContext);
console.log('state', state);
  const [loading, setLoading] = useState(false);

  let interestValue =
    state?.user?.user?.information_gathering?.attributes?.Interests || state?.user?.user?.information_gathering?.Interests;
    interestValue = interestValue?.split(",")
    console.log('interestValue', interestValue);
  useEffect(() => {
    setSelectedBtn(interestValue || []);
  }, [state]);


  const handleBtnClick = async () => {
    console.log('ds', state?.user?.user?.information_gathering);
    setLoading(true);
    const token = getTokenFromLocalCookie();
    await axios({
      url: state?.user?.user?.information_gathering?.id
        ? process.env.NEXT_PUBLIC_STRAPI_URL +
          `/information-gatherings/${state?.user?.user?.information_gathering?.id}`
        : process.env.NEXT_PUBLIC_STRAPI_URL + `/information-gatherings`,
      method: state?.user?.user?.information_gathering ? "put" : "post",
      data: {
        data: {
          Interests: selectedBtn.toString(),
          users_permissions_user: state?.user?.user
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        setLoading(false);
        query ? 
        router.push("/profile") :
        router.push("/information-gathering/vehicles");
        dispatch({
          type: "UPDATE_USER_INFOMATION_GATHERING",
          payload: res?.data?.data,
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative px-[24px]">
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
