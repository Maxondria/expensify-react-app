import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate
} from "../redux/actions/filters";
import { DateRangePicker } from "react-dates";
import { setStartDate, setEndDate } from "../redux/actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calenderFocused => this.setState({ calenderFocused });

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.props.setTextFilter(e.target.value)}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            return e.target.value === "date"
              ? this.props.sortByDate()
              : this.props.sortByAmount();
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ filters }) => ({
  filters
});

const mapDispatchToProps = {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
