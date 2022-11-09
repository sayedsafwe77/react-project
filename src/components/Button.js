import React from "react";
import Input from "./Input";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showInput: true,
    };
  }
  componentDidMount() {
    console.log("mount");
  }
  changeCount() {
    this.setState((prevState) => {
      return {
        count: ++prevState.count,
        showInput: prevState.showInput,
      };
    });
  }
  toggleInputHandler() {
    this.setState((preState) => {
      return {
        count: preState.count,
        showInput: !preState.showInput,
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.showInput && <Input></Input>}
        <button onClick={this.toggleInputHandler.bind(this)}>
          toggle input
        </button>
        <p>{this.state.count}</p>
        <button onClick={this.changeCount.bind(this)}>{this.props.text}</button>
      </div>
    );
  }
}
export default Button;
