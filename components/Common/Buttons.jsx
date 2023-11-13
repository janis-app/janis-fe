export default function Button({ title, selectedBtn, clickHandler, isMulti }) {
  return (
    <>
      <div style={{ margin: 8 }}>
        <button
          className={`text-[#000] text-[14px] flex justify-center items-center h-[48px] py-[12px] px-[14px] bg-none border-2 border-[#DAF5FE] rounded-[40px]`}
          style={{
            backgroundColor: isMulti
              ? selectedBtn.includes(title)
              : title == selectedBtn
              ? "#D9F5FE80"
              : "transparent",
          }}
          onClick={clickHandler}
        >
          {title}
        </button>
      </div>
    </>
  );
}
