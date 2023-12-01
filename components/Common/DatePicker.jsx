import React, { useEffect, useState } from "react";
import DatePicker from "react-mobile-datepicker";
import styles from "../../styles/customPicker.module.css";
const CustomDatePicker = ({ selectedDate, setSelectedDate, maxDate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [initialDate, setInitialDate] = useState(new Date());

  useEffect(() => {
    if (selectedDate) {
      const dateParts = selectedDate.split("/"); // Split the string into an array of parts
      const year = parseInt(dateParts[0]); // Extract the year part and convert it to a number
      const month = parseInt(dateParts[1]) - 1; // Extract the month part (subtract 1 as month is zero-based in JavaScript)
      const day = parseInt(dateParts[2]); // Extract the day part
      const newDate = new Date(year, month, day); // Create a new Date object using the extracted values
      setInitialDate(newDate);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // const handleDateChange = (date) => {
  //   const formattedDate = `${date.getFullYear()}-${
  //     date.getMonth() + 1
  //   }-${date.getDate()}`;
  //   setSelectedDate(formattedDate);
  //   setInitialDate(date);
  // };

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 

    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDate(formattedDate);
    setInitialDate(date);
  };

  const monthMap = {
    1: "January",
    2: "Febuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "Jully",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const dateConfig = {
    month: {
      format: (value) => monthMap[value.getMonth() + 1],
      caption: "Mon",
      step: 1,
    },
    date: {
      format: "DD",
      caption: "Day",
      step: 1,
    },
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
  };

  useEffect(() => {
    const datePickerWheels =
      document.getElementsByClassName("datepicker-wheel");
    for (let i = 0; i < datePickerWheels.length; i++) {
      //   datePickerWheels[i].style.border = "none";
    }
  }, []);

  return (
    <div>
      <DatePicker
        isPopup={false}
        isOpen={isOpen}
        max={new Date()}
        value={initialDate}
        onSelect={handleDateChange}
        onChange={handleDateChange}
        onCancel={handleClose}
        theme=""
        dateConfig={dateConfig}
        showHeader={false}
        showFooter={false}
        style={styles.container}
      />
    </div>
  );
};

export default CustomDatePicker;
