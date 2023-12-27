import React, { useState } from "react";
import "./styles/Calendar.css"; // Asegúrate de tener un archivo CSS para el estilo

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const totalDays = daysInMonth(date.getMonth(), date.getFullYear());
    const startingDay = firstDayOfMonth();
    const calendar = [];

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push(null);
        } else if (dayCounter > totalDays) {
          break;
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }

      calendar.push(week);
    }

    return calendar;
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const calendar = generateCalendar();

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index}>{day !== null ? day : ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;

// import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
// import { DateRange } from "@mui/x-date-pickers-pro";

// export default function DateRangeCalendarValue() {
//   const [value, setValue] =
//     React.useState <
//     DateRange <
//     Dayjs >> [dayjs("2022-04-17"), dayjs("2022-04-21")];

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DateRangeCalendar", "DateRangeCalendar"]}>
//         <DemoItem label="Uncontrolled calendar">
//           <DateRangeCalendar
//             defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
//           />
//         </DemoItem>
//         <DemoItem label="Controlled calendar">
//           <DateRangeCalendar
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//           />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
