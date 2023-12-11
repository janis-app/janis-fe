import PageHeader from "@/components/Common/PageHeader";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { LiaEditSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "@/styles/setup-profile/setup-profile.module.css";
import profile from "@/public/assets/profileImg.svg";
import mark from "@/public/assets/mark.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import profileIcon from "@/public/assets/profileIcon.jpg";
import { AppContext } from "@/components/context/AppContext";
import { useContext, useEffect } from "react";
import { getTokenFromLocalCookie } from "@/lib/auth";
import { getUserProfileDetails } from "@/utils/getUserProfileDetails";


function Home() {
  const { state } = useContext(AppContext);
  const router = useRouter();

  return (
    <div className={styles.main_container}>
      <div className={styles.conatiner}>
        {/* <main className="overflow-x-hidden pt-[30px]"> */}
        <div className={`h-3/4  pb-[62px] ${styles.logo_container}`}>
          <div className="flex justify-between pl-[24px] pr-[24px] mb=[14px]">
            <div className={styles.credit_div}>
              <p className={styles.credit_no}>5</p>
              <p
                style={{ fontSize: 12, fontWeight: 500 }}
                className={styles.credit}
              >
                Credits
              </p>
            </div>
            <Image
              // src={profile}
              src={
                state?.user?.user?.profile_image
                  ? state?.user?.user?.profile_image?.url
                  : profileIcon
              }
              width={32}
              height={32}
              alt="Profile image"
              className="rounded-2xl"
              onClick={() => router.push("/profile")}
            />
          </div>

          <div className="mx-auto w-full flex justify-center mb-[37px]">
            <Image src={logo} alt="logo" />
          </div>
          <div className="text-center text-[16px] font-[400]  text-white mb-[75px]">
            <p className="leading-[19.2px]">
              Hey <span className="font-[700]">Janis!</span> 👋{" "}
            </p>
            <p className="leading-[19.2px]">
              Unlock unique adventures tailored to your preferences. Are you
              Keen?
            </p>
          </div>
          <h3 className="text-[52px] ml-[24px] font-[600] leading-[62.4px] text-white max-w-[266px] ">
            Let’s <br />
            make memories!
          </h3>
        </div>
        <div className={styles.btn_main}>
          <div className={styles.btn_conatiner}>
            <Link
              href="/start-adventure/location"
              className="w-[100%] bg-white h-[72px]  right-0 left-[20px] rounded-[32px]  before:rounded-tr-[.5%] flex justify-center items-center px-[10px]"
            >
              <button className="bg-[#DAF5FE] h-[52px] w-[99%] rounded-[32px] flex justify-center items-center gap-[5px] font-[500] text-[19px] leading-[23px]">
                Start you Adventure
                <FaArrowRightLong size={13} />
              </button>
            </Link>
          </div>
        </div>
        <div className={`h-4/25  pb-[62px] ${styles.empty_container}`}>
          <Link
            href="/information-gathering/personality"
            className="text-center mt-[20px] text-[#AFB3BC] text-[14px] font-[500] leading-[16.94px] flex justify-center items-center gap-[5px]"
          >
            <p>Edit preferences</p>
            <LiaEditSolid size={17} />
          </Link>
        </div>
        {/* </main> */}
      </div>
    </div>
  );
}

export default Home;
// export default withAuthProtection(Home);
