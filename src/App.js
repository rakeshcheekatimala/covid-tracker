import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import "./app.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function loadData() {
      let result = await fetchData();
      setData(result);
    }

    loadData();
  }, []);

  return (
    <div className="container">
      <Cards data={data} />
      <CountryPicker xs={12} md={6} />
      <Chart />
    </div>
  );
};

export default App;
