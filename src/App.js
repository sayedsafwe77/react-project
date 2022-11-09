import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/Button";
import Count1 from "./components/Count1";
import Expenses from "./components/Expenses";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* <Button text="btn 1" title="" header=""></Button> */}
      {/* <Button text="btn 2"></Button> */}
      {/* <Count1 text="my text from parent"></Count1> */}

      <Expenses></Expenses>
    </div>
  );
}

// components
// functions
export default App;
