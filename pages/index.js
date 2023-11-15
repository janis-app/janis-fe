import PageHeader from "@/components/Common/PageHeader";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { LiaEditSolid } from "react-icons/lia";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <PageHeader />
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
      <h3 className="text-[52px] font-[600] leading-[62.4px] text-white max-w-[266px] mb-[62px]">
        Let’s <br />
        make memories!
      </h3>
      <div className="w-[407px] bg-white h-[72px] absolute right-0 left-[20px] rounded-tl-[32px] rounded-bl-[32px] before:rounded-tr-[.5%]">
        f
      </div>
      <Link href="/information-gathering/personality" className="text-center mt-[150px] text-[#AFB3BC] text-[14px] font-[500] leading-[16.94px] flex justify-center items-center gap-[5px]">
        <p>Edit preferences</p>
        <LiaEditSolid size={17} />
      </Link>
    </main>
  );
}
