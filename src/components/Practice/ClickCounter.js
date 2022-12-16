import React from "react";

class ClickCounter extends React.Component {
  render() {
    const {count,increment}=this.props
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={increment}>Add One</button>
      </div>
    );
  }
}
export default ClickCounter;
