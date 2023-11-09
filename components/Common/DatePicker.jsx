import Datepicker from "react-mobile-datepicker";

function DatePickerComponent() {
  const data = {
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
    month: {
      format: "M",
      caption: "Mon",
      step: 1,
    },
    date: {
      format: "D",
      caption: "Day",
      step: 1,
    }
  };
  return (
    <div>
      <Datepicker dateConfig={data} isOpen={true} theme="ios" showHeader={false} />
    </div>
  );
}

export default DatePickerComponent;
