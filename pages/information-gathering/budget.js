import NextButton from "@/components/Common/NextButton";
import BudgetItems from "@/components/InformationGathering/BudgetItems";
import DietItems from "@/components/InformationGathering/DietItems";
import Header from "@/components/InformationGathering/Header";
import HeaderText from "@/components/InformationGathering/HeaderText";
import InterestItems from "@/components/InformationGathering/InterestItems";
import VehicleItems from "@/components/InformationGathering/VehicleItems";
import { AppContext } from "@/components/context/AppContext";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { getTokenFromLocalCookie } from "@/lib/auth";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

function Budget() {
  const router = useRouter();
  const [value, setValue] = useState(50);

  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const informations = state?.user?.user?.information_gathering?.attributes || state?.user?.user?.information_gathering;

  useEffect(() => {
    setValue(informations?.budget || 50);
  }, [state]);

  const handleBtnClick = async () => {
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
          budget: value,
          users_permissions_user: state?.user?.user,
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        setLoading(false);
        router.push("/information-gathering/crew");
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
    <div className="px-[24px]">
      <Header progess={80} link="information-gathering/diet" show={true} />
      <HeaderText
        title="Plan Your Adventure, Your Way!"
        text="What’s your daily budget?"
      />
      <BudgetItems value={value} setValue={setValue} />
      <div
        // href="/information-gathering/crew"
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
      >
        <NextButton handleClick={handleBtnClick} loading={loading} />
      </div>
    </div>
  );
}

// export default Budget;
export default withAuthProtection(Budget);

Budget.getLayout = function PageLayout(page) {
  return <div className="white-screen-container">{page}</div>;
};
