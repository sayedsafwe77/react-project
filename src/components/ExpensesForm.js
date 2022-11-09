import { useState } from "react";
import { useContext } from "react";
import { ExpensesContext } from "../store/ExpensesContext";
function ExpensesForm() {
  const { setExpenses } = useContext(ExpensesContext);

  const [formInput, setFormInput] = useState({
    title: "break fast",
    amount: 50,
    date: "",
  });
  function submitFormHandler(e) {
    e.preventDefault();
    setExpenses((prev) => {
      return [...prev, formInput];
    });
  }

  async function formInputHandler(e) {
    // get input value
    // set title with this values
    setFormInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="col-3">
      <form onSubmit={submitFormHandler}>
        <label htmlFor="title" className="form-label">
          title
        </label>
        <input
          type="text"
          value={formInput.title}
          onChange={formInputHandler}
          className="form-control"
          name="title"
        />
        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input
          type="number"
          value={formInput.amount}
          onChange={formInputHandler}
          className="form-control"
          name="amount"
        />
        <label htmlFor="date" className="form-label">
          date
        </label>
        <input
          type="date"
          value={formInput.date}
          onChange={formInputHandler}
          className="form-control"
          name="date"
        />
        <input type="submit" className="form-action" />
      </form>
    </div>
  );
}
export default ExpensesForm;
