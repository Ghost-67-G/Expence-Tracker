import "./App.css";
import Balance from "./Components/Balance";
import AddTransaction from "./Components/AddTransaction";
import History from "./Components/History";
import { createContext } from "react";
import { GlobalProvider } from "./Store/context";

export const context = createContext();
const App = () => {
  return (
    <div className="body">
      <GlobalProvider>
        <Balance />
        <History />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
};
export default App;
