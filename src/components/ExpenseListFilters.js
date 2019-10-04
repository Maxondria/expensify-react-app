import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../redux/actions/filters";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => props.setTextFilter(e.target.value)}
    />

    <select
      name="sort_by"
      id="sort_by"
      value={props.filters.sortBy}
      onChange={e => {
        return e.target.value === "date"
          ? props.sortByDate()
          : props.sortByAmount();
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = ({ filters }) => ({
  filters
});

const mapDispatchToProps = {
  setTextFilter,
  sortByAmount,
  sortByDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
