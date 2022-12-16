import React from "react";

class Timer extends React.Component {
  state = {
    timer: new Date(),
  };

  componentDidMount = () => {
    setInterval(this.tick, 1000);
  };

  tick = () => {
    this.setState({ timer: new Date() });
  };

  render() {
    return (
      <div>
        <h2>{this.state.timer.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Timer;
