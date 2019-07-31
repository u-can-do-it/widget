import React from "react";
import { getWeekDay } from "../../utils/dateFormat";
import style from "./forecastList.module.css";

const forecastList = props => {
  let list = props.forecast.map((val, index) => {
    return (
      <li key={index} className={style.item}>
        <div className={style.box}>
          <div className={style.boxItem}>
            <h6 className={style.itemTitle}>
              {index === 0 ? "Today" : getWeekDay(val.date)}
            </h6>
          </div>

          <div className={style.boxItem}>
            <figure>
              <img
                className={style.itemImg}
                src={require(`../../assets/${val.type}.png`)}
                alt={val.type}
              />
            </figure>
          </div>
          <div className={style.boxItem + " " + style.temperature}>
            <span>{parseInt(val.temperature * 1.8 + 32)}&deg; </span>

            <span className={style.gray}>{val.temperature}&deg;</span>
          </div>

          <div className={style.boxItem}>
            <p className={style.gray}>Pollen {val.pollenCount}</p>
          </div>
        </div>
      </li>
    );
  });

  return <ul className={style.list}>{list}</ul>;
};
export default forecastList;
