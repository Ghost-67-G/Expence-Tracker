import { createStore, combineReducers } from "redux";


function balanceSection(old = [], newData) {
  if (newData.type === "ADD_TRANSACTION") {
    old.push(newData.data);
  } else if (newData.type === "DELETE_TRANSACTION") {
    old.splice(newData.data, 1);
  }
  return [...old];
}

let allSections = combineReducers({ balanceSection });
let store = createStore(allSections);

export default store;
