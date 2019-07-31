import React from "react";
import * as dateFormat from "../../utils/dateFormat";
import style from "./forecastDetails.module.css";

const forecastDetails = props => {
  return (
    <div className={style.forecast}>
      <div className={style.date}>
        {dateFormat.getWeekDay(props.forecast.date)},{" "}
        {dateFormat.getMonthName(props.forecast.date)}{" "}
        {dateFormat.getOrdinalSuffix(props.forecast.date)}
        <br />
        <p>Forecast</p>
      </div>
      <div className={style.box}>
        <div className={style.rough}>
          <figure className={style.imgBox}>
            <img
              className={style.img}
              src={require(`../../assets/${props.forecast.type}.png`)}
              alt={props.forecast.type}
            />
            <span className={style.temperature + " " + style.value}>
              {props.forecast.temperature * 1.8 + 32}
              <span className={style.unit}>&deg;F</span>
            </span>
          </figure>
        </div>
        <ul className={style.details}>
          <li>
            Precipitation:{" "}
            <span className={style.value}>
              {" "}
              {props.forecast.precipitation}%
            </span>
          </li>
          <li>
            Humidity:
            <span className={style.value}> {props.forecast.humidity}%</span>
          </li>
          <li>
            Wind:
            <span className={style.value}>
              {" "}
              {props.forecast.windInfo.speed} mph{" "}
              {props.forecast.windInfo.direction}
            </span>
          </li>
          <li>
            Pollen Count:
            <span className={style.value}> {props.forecast.pollenCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default forecastDetails;
