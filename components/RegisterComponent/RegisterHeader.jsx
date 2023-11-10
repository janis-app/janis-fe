import { useRouter } from "next/router";
import { PiCaretLeftBold } from "react-icons/pi";

function RegisterHeader({ step, setStep, link }) {
  const router = useRouter();
  return (
    <div className="pt-[24px] flex justify-between items-center mb-[53px]">
      <span
        className="bg-[#D9F5FE80]  h-[32px] w-[32px] flex justify-center items-center rounded-full"
        onClick={() => {
          if (setStep) {
            if (step > 1) {
              setStep((prev) => prev - 1);
            } else {
              router.push("/login");
            }
          } else {
            router.push(link);
          }
        }}
      >
        <PiCaretLeftBold size={20} />
      </span>
      <div className="h-[50px] w-[50px] border-[3px] border-[#FFFFFF4D] rounded-full flex justify-center items-center text-[12px] text-white font-medium">
        {step}/5
      </div>
    </div>
  );
}

export default RegisterHeader;
