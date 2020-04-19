import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import style from "./country.module.css";

import { fetchCountriesData } from "../../API";

const Country = ({ changeInfectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountriesData());
    };

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={style.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => changeInfectedCountry(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
