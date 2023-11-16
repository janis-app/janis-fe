function HeaderText({ title, text, subText, color }) {
  return (
    <div className="relative z-[2] text-center flex flex-col justify-center items-center font-[500]">
      <h3
        className="text-[20px] leading-[24.2px]"
        style={{ color: color ? color : "#000" }}
      >
        {title}
      </h3>
      <p
        className="text-[16px] leading-[19.36px] text-[#7A7676] mt-[8px]"
        style={{ color: color ? color : "#7A7676" }}
      >
        {text}
      </p>
    </div>
  );
}

export default HeaderText;
