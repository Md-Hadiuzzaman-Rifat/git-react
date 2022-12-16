import React from "react";

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(){
    this.clockTimer=setInterval(this.tick(),1000)
  }

  tick=()=>()=>{
    this.setState({
        date:new Date()
    })
}

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }

  render() {
    return <div>
        <h2>This is Timer Component.</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
    </div>
  }
}
export default Timer;
