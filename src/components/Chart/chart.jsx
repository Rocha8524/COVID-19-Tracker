import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../API/index";

import style from "./chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [ dailyData, setDailyData ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchAPI();
    }, []);

    const barChart = (
        confirmed ? (
            <Bar 
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: "People",
                        backgroundColor: [],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ]
            }}
            options={{
                legend: {display: false},
                title: {display:true, text: `Current state in ${country}`},
            }}
            />
        ) : null
    );

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ data }) => data.confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    }, {
                        data: dailyData.map(({ data }) => data.deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(172, 3, 3, 0.589)",
                        fill: true,
                    }],
                }}
            />
        ) : null
    );

    return (
        <div className={style.container}>
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;