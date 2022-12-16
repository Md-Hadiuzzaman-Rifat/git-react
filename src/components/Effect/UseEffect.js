import React from "react";
import Counter from "./ClassComponent/Counter";
// import Counter from "./FunctionalComponent/Counter"

class UseEffect extends React.Component {
  state = {
    isTrue: true,
  };
  handleState=()=>{
    this.setState(prev=>({isTrue:!prev.isTrue}))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleState}>Click here</button>
        {this.state.isTrue || <Counter/>}
        {/* <Counter></Counter> */}
      </div>
    );
  }
}
export default UseEffect;
