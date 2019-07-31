import React from "react";
import style from "./dropdown.module.css";

const dropdown = props => {
  let options = props.options.map((option, index) => {
    return (
      <option key={option.id} value={option.id} className={style.dropdown}>
        {option.name}
      </option>
    );
  });

  return (
    <select
      onChange={event => props.onSelect(event)}
      className={style.dropdown}
    >
      <option value="">select a city</option>
      {options}
    </select>
  );
};
export default dropdown;
