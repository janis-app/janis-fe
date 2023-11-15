import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PiCaretLeftBold } from "react-icons/pi";

function Header({ progess, link, show, title , profile }) {
  const router = useRouter();
  return (
    <div className="pt-[24px] flex justify-between items-center  mb-[32px]">
      <div
        className="bg-[#D9F5FE80]  h-[32px] w-[32px] flex justify-center items-center rounded-full"
        onClick={() => router.back()}
      >
        <PiCaretLeftBold size={20} />
      </div>
      <div>
        {show && (
          <div className="bg-[#F7F7F7] h-[8px] w-[128px] relative rounded-2xl">
            <div
              className={`absolute inset-0 bg-[#B9E6F5] rounded-2xl`}
              style={{ width: `${progess}%` }}
            />
          </div>
        )}

        {
          title && <h2 style={{ color:"#fff"}}>{title}</h2>
        }

      </div>
      <div>
        {
          profile && 
          <Image
          src={profile}
          width={32}
          height={32}
          alt="Profile image"
          className="rounded-2xl"
        />
        }
      </div>
    </div>
  );
}

export default Header;
