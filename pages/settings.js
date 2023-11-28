import { PiCaretLeftBold } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { SlLock } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa6";
import web from "../public/assets/web.png";
import privacy from "../public/assets/privacy.png";
import help from "../public/assets/help.png";
import logout from "../public/assets/logout.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { unsetToken } from "@/lib/auth";
import withAuthProtection from "@/components/hoc/withAuthProtection";
import { useContext } from "react";
import { AppContext } from "@/components/context/AppContext";

function Settings() {
  const {state, dispatch} = useContext(AppContext)

  const router = useRouter();
  return (
    <div className="bg-[#A2DCF0]">
      <div className="relative z-[2] pt-[24px] flex justify-between items-center   pb-[29px] px-[20px] ">
        <div
          className="bg-[#D9F5FE80]  h-[32px] w-[32px] flex justify-center items-center rounded-full"
          onClick={() => router.back()}
        >
          <PiCaretLeftBold size={20} />
        </div>
        <p className="text-white font-[600] text-[24px] leading-[32px]">
          Settings
        </p>
        <div></div>
      </div>
        <div className="bg-white h-[677px] w-full  rounded-tr-[50px] rounded-tl-[50px] border px-[35px] py-[46px]">
          <div className="flex justify-between mb-[24px]">
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <HiOutlineEnvelope size={22} />
              </span>
              <p className="text-[16px] font-medium">Email</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <p className="text-[#ADB3C2] text-[14px] font-normal text-right">
                {state?.user?.email}
              </p>
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
          <div className="flex justify-between mb-[24px]">
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <SlLock size={22} />
              </span>
              <p className="text-[16px] font-medium">Password</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
          <div className="flex justify-between mb-[24px]">
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <FaRegBell size={22} />
              </span>
              <p className="text-[16px] font-medium">Notifications</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
          <div className="flex justify-between mb-[24px]">
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <Image src={web} alt="web" />
              </span>
              <p className="text-[16px] font-medium">Language option</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <p className="text-[#ADB3C2] text-[14px] font-normal text-right">
                English
              </p>
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#DDE3EA] my-[16px]" />
          <div className="flex justify-between mb-[24px]">
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <Image src={privacy} alt="web" />
              </span>
              <p className="text-[16px] font-medium">Privacy policy</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
          <div className="flex justify-between mb-[24px]">
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <Image src={help} alt="web" />
              </span>
              <p className="text-[16px] font-medium">Help</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
          <div className="flex justify-between mb-[24px]" onClick={()=>unsetToken()}>
            <div className="flex items-center gap-[27px]">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[#F4F8FC] rounded-full">
                <Image src={logout} alt="web" />
              </span>
              <p className="text-[16px] font-medium">Logout</p>
            </div>
            <div className="flex items-center gap-[20px]">
              <RxCaretRight color="#C8C9CF" size={30} />
            </div>
          </div>
        </div>
    </div>
  );
}

// export default Settings;
export default withAuthProtection(Settings);

