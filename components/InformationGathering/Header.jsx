import Link from "next/link";
import { useRouter } from "next/router";
import { PiCaretLeftBold } from "react-icons/pi";

function Header({ progess, link, show }) {
  const router = useRouter();
  return (
    <div className="pt-[24px] flex justify-between items-center  mb-[32px]">
      <div
        className="bg-[#D9F5FE80]  h-[32px] w-[32px] flex justify-center items-center rounded-full"
        onClick={() => router.back()}
      >
        <PiCaretLeftBold size={20} />
      </div>
      {show && (
        <div className="bg-[#F7F7F7] h-[8px] w-[128px] relative rounded-2xl">
          <div
            className={`absolute inset-0 bg-[#B9E6F5] rounded-2xl`}
            style={{ width: `${progess}%` }}
          />
        </div>
      )}
      <div></div>
    </div>
  );
}

export default Header;
