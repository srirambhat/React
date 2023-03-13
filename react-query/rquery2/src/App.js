import { useState } from "react";
import "./App.css";
import Customers from "./components/Customers";

function App() {
  const [showcustomers, setShowCustomers] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowCustomers(!showcustomers);
        }}
      >
        {showcustomers ? "Hide Customers" : "Show Customers"}
      </button>
      {showcustomers ? <Customers /> : null}
    </div>
  );
}

export default App;
