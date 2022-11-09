import { useState } from "react";
import "../main.css";
import ExpensesForm from "./ExpensesForm";
import ExpensesTable from "./ExpensesTable";
import { ExpensesContextProvider } from "../store/ExpensesContext";
function Expenses() {
  // expenses array of objects

  // on form submit read new form data
  // insert into expenses table
  //  let key = 'title';

  return (
    <div className="row">
      <ExpensesContextProvider>
        <ExpensesForm />
        <ExpensesTable />
      </ExpensesContextProvider>
    </div>
  );
}

export default Expenses;
