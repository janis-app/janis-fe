import Image from "next/image";
import profile from "../../public/assets/profile-img.png";

function PageHeader() {
  return (
    <div className="pt-[30px] mb-[10px]">
      <div className="flex justify-between items-center">
        <div className="w-[85.49px] bg-[#CFE4EE] h-[32px] flex justify-between items-center rounded-[100px] px-[6px] pr-[8px]">
          <span className="w-[23px] h-[23px] text-[10px] font-medium leading-[12.1px] flex justify-center items-center bg-white rounded-full">
            5
          </span>
          <p className="text-[12px] font-medium leading-[14.52px]">Credits</p>
        </div>
        <div className="w-[32px] h-[32px] rounded-full">
          <Image
            src={profile}
            alt="profile-img"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
