import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import "./app.css";
import { fetchData, getGeoInfo } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState();

  useEffect(() => {
    async function loadData() {
      let country = await getGeoInfo();
      setCountry(country);
      let result = await fetchData(country);
      setData(result);
    }
    loadData();
  }, []);

  const onCountryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(country);
    setData(data);
  };

  return (
    <div className="container">
      <Cards data={data} />
      {country ? (
        <CountryPicker
          xs={12}
          md={6}
          onCountryChange={onCountryChange}
          country={country}
        />
      ) : (
          <div>Fetching Data about country</div>
        )}
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
