import moment from "moment";

const initialState = {
  expenses: [],
  filters: {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  }
};

export default initialState;
