// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddTransaction = ({ setHistory }) => {
  
  let Form = useForm();
  let dispatch = useDispatch();

  const transaction = (obj) => {
    dispatch({
      type: "ADD_TRANSACTION",
      data: obj,
    });
  };
  return (
    <>
      <div className="Transaction">
        <h3>Add New Transaction</h3>
      </div>
      <form onSubmit={Form.handleSubmit(transaction)}>
        <h4>Descriptiom</h4>
        <div>
          <input {...Form.register("Desc")} type="text" />
        </div>
        <h4>Transaction Amount</h4>
        <div>
          <input {...Form.register("Amount")} type="number" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
