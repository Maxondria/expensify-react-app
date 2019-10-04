import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    amount: "",
    description: "",
    note: ""
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
