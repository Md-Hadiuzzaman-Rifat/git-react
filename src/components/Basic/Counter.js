import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount=()=>{
    this.setState(prevCount=>({count:prevCount.count+1}))
  }

  render() {
    return (
      <div>
        <h2>This is Counter Component.</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.incrementCount}>Click here</button>
      </div>
    );
  }
}
export default Counter;
