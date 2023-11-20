import PageHeader from "@/components/Common/PageHeader";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { LiaEditSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from '@/styles/setup-profile/setup-profile.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div className={styles.conatiner}>
        {/* <main className="overflow-x-hidden pt-[30px]"> */}
        <div className={`h-3/4  pb-[62px] ${styles.logo_container}`}>
          <div className="mx-auto w-full flex justify-center mb-[37px]">
            <Image src={logo} alt="logo" />
          </div>
          <div className="text-center text-[16px] font-[400]  text-white mb-[75px]">
            <p className="leading-[19.2px]">
              Hey <span className="font-[700]">Janis!</span> 👋{" "}
            </p>
            <p className="leading-[19.2px]">
              Unlock unique adventures tailored to your preferences. Are you Keen?
            </p>
          </div>
          <h3 className="text-[52px] ml-[24px] font-[600] leading-[62.4px] text-white max-w-[266px] ">
            Let’s <br />
            make memories!
          </h3>
        </div>
        <div className={styles.btn_main}>
          <div className={styles.btn_conatiner}>
            <Link href="/information-gathering/personality" className="w-[342px] bg-white h-[72px]  right-0 left-[20px] rounded-[32px]  before:rounded-tr-[.5%] flex justify-center items-center px-[10px]">
              <button className="bg-[#DAF5FE] h-[52px] w-[320px] rounded-[32px] flex justify-center items-center gap-[5px] font-[500] text-[19px] leading-[23px]">
                Set up your profile
                <FaArrowRightLong size={13} />
              </button>
            </Link>
          </div>
        </div>
        <div className={`h-4/25  pb-[62px] ${styles.empty_container}`}>
          <p style={{ display: "none" }}>anthing</p>
        </div>
        {/* </main> */}
      </div>
    </div>
  );
}
