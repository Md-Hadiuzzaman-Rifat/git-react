import React from "react";

class Render extends React.Component {
  state={
    count:0
  }

  handleIncrement=()=>{
    this.setState(prevCount=>({count:prevCount.count+1}))
  }

  render() {
    const {children}=this.props
    return children(this.state.count,this.handleIncrement)
  }
}
export default Render;
