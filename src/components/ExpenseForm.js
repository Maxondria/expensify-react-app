import React from "react";
import moment from "moment";
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
      <form className="form" onSubmit={this.onFormSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          name="description"
          value={this.state.description}
          placeholder="Description"
          onChange={this.OnChange}
          autoFocus
        />
        <input
          type="text"
          className="text-input"
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
          showClearDate={true}
          id="CreatedAt"
        />
        <textarea
          cols="20"
          rows="5"
          name="note"
          className="textarea"
          placeholder="Add A Note"
          onChange={this.OnChange}
          value={this.state.note}
        />
        <div>
          {/*Button not a flex child, won't be affected by flexbox's column direction*/}
          <button className="button" type="submit">Save Expense</button>
        </div>
      </form>
    );
  }
}
