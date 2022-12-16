import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0,
    timer: new Date(),
  };

  componentDidMount = () => {
    const { counter } = this.state;
    document.title = `clicked ${counter}`;

    this.clock=setInterval(this.tick, 1000);
  };

  tick = () => {
    console.log('clock clicking')
    this.setState({ timer: new Date() });
  };

  componentDidUpdate = () => {
    const { counter } = this.state;
    document.title = `Clicked ${counter}`;
    console.log('updated')
  };

  componentWillUnmount = () => {
    const { counter } = this.state;
    document.title = counter;
    console.log('unmounted')

     clearInterval(this.clock)
     
  };

  handleIncrement = () => {
    this.setState((prevCounter) => ({ counter: prevCounter.counter + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Add One</button>
      </div>
    );
  }
}
export default Counter;
