import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";

import style from "./chart.module.css";

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData (await fetchDailyData());
        }
        fetchAPI();
    });

    const lineChart = (
        dailyData
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({date}) => date),
                        datasets: [{
                            data: dailyData.map(({confirmed}) => confirmed),
                            label: "Infected",
                            borderColor: "#3333ff",
                            fill: true,
                        }, 
                        {
                            data: dailyData.map(({deaths}) => deaths),
                            label: "Deaths",
                            borderColor: "red",
                            backgroundColor: "rgba(172, 3, 3, 0.589)",
                            fill: true,
                        }]
                    }}
                />
            ) : null
    );

    return (
        <div className={style.container}>
            {lineChart}
        </div>
    )
};

export default Chart;