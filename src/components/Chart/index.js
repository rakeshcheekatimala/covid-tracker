import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "./../../api";

import styles from "./styles.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setDailyData(await fetchDailyData());
      console.log(setDailyData);
    };
    loadData();
  }, []);

  const LineChart = () =>
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              label: "Infected",
              data: dailyData.map((data) => data.confirmed),
              borderColor: "yellow",
              fill: true,
              pointBackgroundColor: "#1d252d",
            },
            {
              label: "Deaths",
              data: dailyData.map((data) => data.deaths),
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return (
    <div className={styles.container}>
      <LineChart />
    </div>
  );
};

export default Charts;
