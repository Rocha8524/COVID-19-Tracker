import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";

import style from "./chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(1, 25, 248, 0.425)",
              "rgba(21, 248, 13, 0.486)",
              "rgba(172, 3, 3, 0.589)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(172, 3, 3, 0.589)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={style.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
