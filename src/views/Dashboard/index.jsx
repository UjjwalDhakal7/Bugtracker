import Navbar from "../NavBar";
import './style.css'
import Stats from "../Stats";
import { useState } from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

export function Dashboard(){

    const [data, setData] = useState(() => {
        const localStorageData = localStorage.getItem('formData');
        return localStorageData ? JSON.parse(localStorageData) : [];
      });

    function handleReducer(array, key, match){
        return array.reduce((total, data) => {
            if (data[key] === match) {
                return total +1;
            }
            return total;
        }, 0);
    } 

    const highPriority = handleReducer(data, "Priority", "High")
    const mediumPriority = handleReducer(data, "Priority", "Medium")
    const lowPriority = handleReducer(data, "Priority", "Low")

    const waitingStatus = handleReducer(data, "Status", "Waiting")
    const ongoingStatus = handleReducer(data, "Status", "On-Going")
    const completedStatus = handleReducer(data, "Status", "Completed")

    return(
        <div className="content">
            <div className="nav"><Navbar /></div>  
            <div className="main">
                <div className="sidebar">
                <Stats data={data} />
                </div>
                <div className="chart">
                    <div className="bar">
                    <Bar 
                    data={{
                        labels:["High", "Medium", "Low"],
                        datasets:[
                            {
                                label:"No. of Bugs",
                                data:[
                                highPriority,
                                mediumPriority,
                                lowPriority,
                                ],
                                backgroundColor: ["#b1efde","#a9d9ed","#eb8388"],
                            },
                        ],
                    }} 
                    options = {{
                        indexAxis:"x",
                        responsive:true,
                        maintainAspectRatio: false,
                        scales: {
                            x:{
                                grid:{
                                    display:false,
                                },
                            },
                            y: {
                                grid:{
                                    display:false,
                                },
                            },
                        },
                    }}
                    />
                    </div>
                    <div className="pie">
                        <Pie
                        data={{
                            labels:["Waiting", "On-Going", "Completed"],
                            datasets:[
                                {
                                    label:"No. of Bugs",
                                    data:[
                                        waitingStatus,
                                        ongoingStatus,
                                        completedStatus,
                                    ],
                                    backgroundColor: ["#b1efde","#a9d9ed","#eb8388"],
                                },
                            ],
                        }} 
                        options = {{
                            responsive:true,
                            maintainAspectRatio: false,

                        }
                    }
                        />
                    </div>
                </div>
            </div>   

        </div>
    )
}