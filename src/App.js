import "./App.css";
import Balance from "./Components/Balance";
import AddTransaction from "./Components/AddTransaction";
import History from "./Components/History";

const App = () => {
  return (
    <div className="body">
      <Balance />
      <History />
      <AddTransaction />
    </div>
  );
};

export default App;
