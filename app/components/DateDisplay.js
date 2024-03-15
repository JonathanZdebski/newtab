import React, { useState, useEffect } from "react";

const DateDisplay = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return {
      date: `${day}/${month}/${year}`,
      dayOfWeek,
    };
  };

  const { date: formattedDate, dayOfWeek } = formatDate(date);

  return (
    <div
      style={{
        position: "fixed",
        top: "110px",
        right: "35px",
        zIndex: 1000,
        fontSize: "2em",
        fontFamily: "MyFont, sans-serif",
      }}
    >
      <div>{formattedDate}</div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {dayOfWeek === "Friday" ? <span>{dayOfWeek}</span> : dayOfWeek}
      </div>
    </div>
  );
};

export default DateDisplay;
