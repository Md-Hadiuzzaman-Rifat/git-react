import React from "react";

class Render extends React.Component {
    state={
        count:0
    }
    handleIncrement=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
    }
  render() {
    const {children}=this.props
    return (children(this.state.count,this.handleIncrement))
  }
}
export default Render;
