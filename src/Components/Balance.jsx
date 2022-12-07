// import { useState } from "react";

import { useSelector } from "react-redux";
// import store from "../Store/Store";

const Balance = () => {
  let currentBalance = 0;
  let expense = 0;
  let income = 0;
  let transaction = useSelector((store) => store.balanceSection);
  for (let item of transaction) {
    currentBalance += +item.Amount;
    if (item.Amount[0] === "-") {
      expense -= +item.Amount;
    } else {
      income += +item.Amount;
    }
  }
  return (
    <>
      <h2>Expense Tracker By Ayan Naseer </h2>
      <h2>Current Balance</h2>
      <h1>${currentBalance}.00</h1>
      <div className="BalanceShower">
        <div className="income">
          <h3>INCOME</h3>
          <h2>{income}.00</h2>
        </div>
        <div className="expense">
          <h3>EXPENSE</h3>
          <h2>{expense}.00</h2>
        </div>
      </div>
    </>
  );
};

export default Balance;
