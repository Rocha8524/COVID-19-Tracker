import React from 'react';

import Cards from "./components/Cards/cards";
import Chart from "./components/Chart/chart";
import Country from "./components/Select-Country/country";

import Style from "./App.css";
import { fetchData } from "./API/index";

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={Style.container}>
        <Cards data={data} />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
