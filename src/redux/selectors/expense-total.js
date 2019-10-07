export default expenses => {
  return (
    Math.round(
      expenses.reduce((accum, expense) => accum + expense.amount, 0) * 100
    ) / 100
  );
};
