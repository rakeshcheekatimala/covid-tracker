import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "./../../api";

import styles from "./styles.module.css";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setDailyData(await fetchDailyData());
    };
    loadData();
  }, []);

  const BarChart = () =>
    confirmed ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
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
      {country ? <BarChart /> : <LineChart />}
    </div>
  );
};

export default Charts;
