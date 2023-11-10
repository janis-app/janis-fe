import React from "react";

function RegisterStepText({ text, subText }) {
  return (
    <div className="text-center text-white  font-[700] text-[32px] leading-[39px] tracking-[-1%] mb-[32px]">
      <p>{text}</p>
      {subText && <p>{subText}</p>}
    </div>
  );
}

export default RegisterStepText;
