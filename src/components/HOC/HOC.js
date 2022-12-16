import React from "react";
import withCounter from "./HigherOrder"

class HOC extends React.Component {
  render() {
    return <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>Click Here</button>
    </div>;
  }
}
export default withCounter(HOC)
