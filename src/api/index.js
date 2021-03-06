import axios from "axios";

const API_URL = "https://covid19.mathdro.id/api";
const GEO_INFO_URL = "https://ipapi.co/json/";

export const fetchData = async (country) => {
  let URL = API_URL;
  if (country) {
    URL = `${API_URL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (e) {
    return {
      confirmed: null,
      recovered: null,
      deaths: null,
      lastUpdate: null,
    };
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/daily`);
    const resultData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return resultData;
  } catch (e) {
    return {};
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${API_URL}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    return {};
  }
};

export const getGeoInfo = async () => {
  try {
    const {
      data: { country_name },
    } = await axios.get(GEO_INFO_URL);
    return country_name;
  } catch (e) {
    return null;
  }
};
