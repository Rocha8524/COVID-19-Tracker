import React from 'react';

import Cards from "./components/Cards/cards";
import Chart from "./components/Chart/chart";
import Country from "./components/Select Country/country";

import Style from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={Style.container}>
          <Cards />
          <Country />
          <Chart />
      </div>
    );
  }
}

export default App;
