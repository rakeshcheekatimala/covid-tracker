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
      <h1> App</h1>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
};

export default App;
