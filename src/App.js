import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </>
  );
}

export default App;
