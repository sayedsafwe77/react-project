import { createContext, useState } from "react";

export let ExpensesContext = createContext();

export function ExpensesContextProvider(props) {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <ExpensesContext.Provider value={{ expenses, setExpenses }}>
        {props.children}
      </ExpensesContext.Provider>
      ;
    </>
  );
}
