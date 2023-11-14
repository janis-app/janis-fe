function HeaderText({ title, text, subText }) {
  return (
    <div className="relative z-[2] text-center flex flex-col justify-center items-center font-[500]">
      <h3 className="text-[20px] leading-[24.2px]">{title}</h3>
      <p className="text-[16px] leading-[19.36px] text-[#7A7676] mt-[8px]">
        {text}
      </p>
    </div>
  );
}

export default HeaderText;
