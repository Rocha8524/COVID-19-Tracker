import React from 'react';

import Header from "./components/Header/header";
import Cards from "./components/Cards/cards";
import Chart from "./components/Chart/chart";
import Country from "./components/Select-Country/country";
import Footer from "./components/Footer/footer";

import Style from "./App.css";
import { fetchData } from "./API/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData, });
  };

  changeInfectedCountry = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={Style.container}>
        <Header />
        <Cards data={data} />
        <Country changeInfectedCountry={this.changeInfectedCountry} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
};

export default App;