
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import { AppContext } from "../context/AppContext";
import profileIcon from '@/public/assets/profileIcon.jpg'

function Header({ progess, link, show, title, profile }) {
  const {state, dispatch} = useContext(AppContext)

  const router = useRouter();
  return (
    <div className="relative z-[2] pt-[24px] flex justify-between items-center mb-[32px]">
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
          title && <h2 className="font-semibold text-[24px]" style={{ color: "#fff" }}>{title}</h2>
        }

      </div>
      <div>
        {
          profile ?
          state?.user?.profile_image ?
          <Image
          // src={profile}
          src={state?.user?.profile_image ? state?.user?.profile_image?.url  : profileIcon}
          width={32}
          height={32}
          alt="Profile image"
          className="rounded-2xl"
          onClick={()=>router.push('/profile')}
        /> : <Image
        // src={profile}
        src={profileIcon}
        width={32}
        height={32}
        alt="Profile image"
        className="rounded-2xl"
        onClick={()=>router.push('/profile')}
      /> : null
        }
      </div>
    </div>
  );
}

export default Header;
