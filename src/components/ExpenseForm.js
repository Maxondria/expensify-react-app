import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  state = {
    amount: "",
    description: "",
    note: "",
    calenderFocused: false,
    date: moment()
  };

  OnChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      [name]:
        name === "amount"
          ? value.match(/^\d+(\.\d{0,2})?$/)
            ? value
            : ""
          : value
    }));
  };

  OnSave = e => {
    e.preventDefault();
    console.log(this.state);
  };

  OnFocusChange = ({ focused }) => this.setState({ calenderFocused: focused });

  OnDateChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.OnChange}
            autoFocus
          />
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.OnChange}
            placeholder="Amount"
          />
           {/* eslint-disable react/prop-types */}
          <SingleDatePicker
            date={this.state.date}
            onDateChange={this.OnDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.OnFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            id="CreatedAt"
          />
          <textarea
            cols="20"
            rows="5"
            name="note"
            placeholder="Add A Note"
            onChange={this.OnChange}
            value={this.state.note}
          />
          <button onClick={this.OnSave}>Save Expense</button>
        </form>
      </div>
    );
  }
}
