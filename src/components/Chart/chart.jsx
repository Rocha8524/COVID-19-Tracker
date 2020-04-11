import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";

import style from "./chart.module.css";

const Chart = () => {
    const { dailyData, setDailyData } = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);

        fetchAPI();
    });

    const lineChart = (
        dailyData[0] 
        ? (
            <Line
                data={{
                    labels: dailyData(({ date }) => date),
                    datasets: [{
                        data: dailyData(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    }, {
                        data: dailyData(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "#3333ff",
                        fill: true,
                    }],
                }}
            />) :null
    );

    return (
        <h1>Chart</h1>
    )
}

export default Chart;