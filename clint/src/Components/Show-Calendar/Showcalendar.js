import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Showcalendar.css";

const Showcalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendardiv">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Showcalendar;
