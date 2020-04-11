import React from 'react';

import Cards from "./components/Cards/cards";
import Chart from "./components/Chart/chart";
import Country from "./components/Select Country/country";

import Style from "./App.css";
import { fetchData } from "./API/index";

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const response = await fetchData();

    this.setState({ data: response });

    console.log(response);
  }

  render() {
    return (
      <div className={Style.container}>
        <Cards data={this.state.data}/>
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
