import React from "react";
import './style.css';

export default function Stats(props){
    const {data} = props;

    const totalData = data.length;

    const totalHigh = data.reduce((total, data) => {
        if (data.Priority === "High") {
            return total + 1;
        }
        return total;
    }, 0);

    const totalMedium = data.reduce((total, data) => {
        if (data.Priority === "Medium") {
            return total + 1;
        }
        return total;
    }, 0);

    const totalLow = data.reduce((total, data) => {
        if (data.Priority === "Low") {
            return total + 1;
        }
        return total;
    }, 0);
    
return(
    <>
    <div className="display">
        <div className="all">
            <h3> Total Data </h3>
            {totalData}
        </div>
        <div className="high">
        <h3> High </h3>
            {totalHigh}
        </div>
        <div className="medium">
        <h3> Medium </h3>
            {totalMedium}
        </div>
        <div className="low">
        <h3> Low </h3>
            {totalLow}
        </div>
    </div>
    <div className="main">
        
    </div>
    </>
); 
}
