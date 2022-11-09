import React from "react";
class Input extends React.Component {
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
// class Component
// function component
export default Input;
