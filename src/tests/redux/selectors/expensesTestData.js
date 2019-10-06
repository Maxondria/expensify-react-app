import moment from "moment";

export default [
  {
    id: 1,
    description: "Cheese - Cottage Cheese",
    note:
      "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
    amount: 71.97,
    createdAt: 0
  },
  {
    id: 4,
    description: "Cheese - Cheddar With Claret",
    note:
      "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
    amount: 103.39,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: 2,
    description: "Garbage Bags - Clear",
    note:
      "aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien",
    amount: 80.26,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Truffle Shells - Semi - Sweet",
    note:
      "eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
    amount: 74.86,
    createdAt: moment(0)
      .subtract(2, "days")
      .valueOf()
  },
  {
    id: 5,
    description: "Lid Tray - 16in Dome",
    note:
      "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
    amount: 78.67,
    createdAt: moment(0)
      .add(2, "days")
      .valueOf()
  }
];
