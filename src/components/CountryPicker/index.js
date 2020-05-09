import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { fetchCountries } from "./../../api";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const StyledSelect = styled(Select)`
  min-width:300px
`;

const styles = (theme) => ({
  formControl: {
    margin: "24px",
    minWidth: 300,
    maxWidth: 300,
  },
  label: {
    fontWeight: "400",
    fontSize: "1.5rem",
    marginTop: "-1.5rem",
  },
});

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, selectedCountry] = useState("global");
  const { classes } = props;
  useEffect(() => {
    const loadData = async () => {
      setCountries(await fetchCountries());
      console.log(countries);
    };
    loadData();
  }, [countries]);

  const countryChangeHandler = (e) => {
    selectedCountry(e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="country" className={classes.label}>
          Choose Country:
        </InputLabel>
        <StyledSelect value={country} onChange={countryChangeHandler}>
          <MenuItem key="global" value="global">
            Global
          </MenuItem>
          {countries.map((item) => (
            <MenuItem key={"item" + item} value={item}>
              {item}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(CountryPicker);
