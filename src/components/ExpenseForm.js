import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const { expense } = props;

    this.state = {
      amount: expense ? expense.amount.toString() : "",
      description: expense ? expense.description : "",
      note: expense ? (expense.note ? expense.note : "") : "",
      calenderFocused: false,
      date: expense ? moment(expense.createdAt) : moment(),
      error: ""
    };
  }

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

  OnFocusChange = ({ focused }) => this.setState({ calenderFocused: focused });

  OnDateChange = date => {
    if (date) {
      this.setState({ date });
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { description, date, amount, note } = this.state;

    if (!description || !amount) {
      this.setState({ error: "Amount and Description Required" });
    } else {
      this.setState({ error: "" });

      this.props.onSubmit({
        description,
        date: date.valueOf(),
        note,
        amount: parseFloat(amount)
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
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
          <button type="submit">Save Expense</button>
        </form>
      </div>
    );
  }
}
