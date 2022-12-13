// import { useSelector, useDispatch } from "react-redux";

import { useContext } from "react";
import { GlobalContext } from "../Store/context";

const History = () => {
  // let dispatch = useDispatch();
  let { transactions,editTransaction, delTransaction } = useContext(GlobalContext);
  let setActive = false;
  // let data = useSelector((store) => store.balanceSection);
  return (
    <>
      <div className="Transaction">
        <h3>Transaction History</h3>
      </div>
      <ul>
        {transactions.map((item, index) => {
          if (item.type === 'minus') {
            setActive = true;
          } else {
            setActive = false;
          }
          return (
            <li className={setActive ? "history minus" : "plus history"}>
              <button className="LiBtn"
                  onClick={() => {
                    // dispatch({
                    //   type: "DELETE_TRANSACTION",
                    //   transactions: index,
                    // });
                    delTransaction(item.id);
                    // transactions.splice(index, 1);
                  }}
                >
                  X
                </button>
              <div>
                {item.Desc}
              </div>{" "}
              <div>${item.Amount}</div>
              <div>{item.date}</div>
              <button className="LiBtn Edit" onClick={()=>{
                let Description = prompt("Enter the Description")
                let Amount = prompt("Enter the amount")
                editTransaction(item.id,Description,Amount)
              }}>Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default History;
