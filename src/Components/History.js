// import { useSelector, useDispatch } from "react-redux";

import { useContext } from "react";
import { GlobalContext } from "../Store/context";

const History = () => {
  // let dispatch = useDispatch();
  let { transactions, delTransaction } = useContext(GlobalContext);
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
              <div>
                <button
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
                {item.Desc}
              </div>{" "}
              <div>${item.Amount}</div>
              <div>{item.date}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default History;
