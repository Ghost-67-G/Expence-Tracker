import { useContext } from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { GlobalContext } from "../Store/context";
// import { useDispatch } from "react-redux";

const AddTransaction = () => {
  let Form = useForm();
  // let dispatch = useDispatch();
  let { addTransaction } = useContext(GlobalContext);
  const transaction = (obj) => {
    let date = new Date().toLocaleDateString();
    obj.date = date;
    obj.id = v4();
    if(obj.Amount[0]==="-"){
      obj.type = 'minus'
    }else{
      obj.type = 'plus'
    }
    addTransaction(obj);
    // dispatch({
      // type: "ADD_TRANSACTION",
      // data: obj,
    // });
  };
  return (
    <>
      <div className="Transaction">
        <h3>Add New Transaction</h3>
      </div>
      <form onSubmit={Form.handleSubmit(transaction)}>
        <h4><u>Description</u></h4>
        <div>
          <input  {...Form.register("Desc",{required:true})} type="text" />
        </div>
        <h4><u>Transaction Amount</u></h4>
        <div>
          <input {...Form.register("Amount",{required:true})} type="number" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
