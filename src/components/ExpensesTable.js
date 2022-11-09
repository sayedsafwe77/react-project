import { useContext } from "react";
import { ExpensesContext } from "../store/ExpensesContext";
function ExpensesTable() {
  const { expenses } = useContext(ExpensesContext);
  return (
    <div className="col-8">
      <table className="table-primary w-100">
        <thead>
          <tr key="">
            <th>title</th>
            <th>amount</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.title}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ExpensesTable;
