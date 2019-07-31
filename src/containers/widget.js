import React, { Component } from "react";
import axios from "axios";
import Dropdown from "../components/dropdown/dropdown";
import ForecastList from "../components/forecastList/forecastList";
import ForecastDetails from "../components/forecastDetails/forecastDetails";
import style from "./widget.module.css";
import Spinner from "../components/UI/spinner/spinner";

class Widget extends Component {
  state = {
    cities: null,
    forecast: null,
    forecastLoading: false
  };

  componentDidMount() {
    axios
      .get("https://dev-weather-api.azurewebsites.net/api/city")
      .then(response => {
        this.setState({ cities: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onCitySelect = event => {
    if (!event.target.value) {
      return;
    }
    this.setState({ forecastLoading: true });
    let date = new Date();
    let dateFormatted = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;

    axios
      .get(
        `https://dev-weather-api.azurewebsites.net/api/city/${
          event.target.value
        }/weather?date=${dateFormatted}`
      )
      .then(response => {
        this.setState({ forecast: response.data });
        this.setState({ forecastLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let dropdown = <Spinner />;
    let list = null;
    let details = null;
    if (this.state.cities) {
      dropdown = (
        <Dropdown options={this.state.cities} onSelect={this.onCitySelect} />
      );
    }
    if (this.state.forecastLoading) {
      list = <Spinner />;
    }
    if (this.state.forecast) {
      list = <ForecastList forecast={this.state.forecast} />;
      details = <ForecastDetails forecast={this.state.forecast[0]} />;
    }

    return (
      <div className={style.widget}>
        {dropdown}
        {details}
        {list}
      </div>
    );
  }
}
export default Widget;
