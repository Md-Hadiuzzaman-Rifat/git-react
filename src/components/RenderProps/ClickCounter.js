import React from "react";

class ClickCounter extends React.Component {
  render() {
    const {count,increment}=this.props
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Click Here</button>
      </div>
    );
  }
}
export default ClickCounter;
