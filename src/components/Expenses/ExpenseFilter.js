import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const filterChangeHandler = (event) => {
    console.log(event.target.value);

    props.filterChangeHandler(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
