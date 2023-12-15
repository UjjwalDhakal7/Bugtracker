import React, { useState } from "react";
import DatePicker from "react-date-picker";

function ChooseDate() {
   const [dateValue, onDateChange] = useState(new Date());
   const mystyle = {
      color: "blue",
      backgroundColor: "lightblue",
      padding: "2rem",
   };
   return (
      <>
         <div style={mystyle}>
            <div>
               <DatePicker
                  onChange={onDateChange}
                  value={dateValue}
                  autoFocus={true}
                  className="date-picker"
                  closeCalendar={false}
               />
            </div>
         </div>
      </>
   );
}
export default ChooseDate;