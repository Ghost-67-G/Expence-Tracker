import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const History = () => {
  let dispatch = useDispatch();
  let setActive = false;
  let data = useSelector((store) => store.balanceSection);
  return (
    <>
      <div className="Transaction">
        <h3>Transaction History</h3>
      </div>
      <ul>
        {data.map((item, index) => {
          if (item.Amount[0] === "-") {
            setActive = true;
          } else {
            setActive = false;
          }
          return (
            <li className={setActive ? "history minus" : "plus history"}>
              <div>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TRANSACTION",
                      data: index,
                    });
                    data.splice(index, 1);
                  }}
                >
                  X
                </button>
                {item.Desc}
              </div>{" "}
              <div>${item.Amount}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default History;
