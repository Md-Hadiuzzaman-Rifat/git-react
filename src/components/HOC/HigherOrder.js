import React from "react";

const withCounter = (OriginalComponent) => {

  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    handleIncrease = () => {
      this.setState((prevCount) => ({
        count: prevCount.count + 1,
      }));
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.handleIncrease}
        ></OriginalComponent>
      );
    }
    
  }
  return NewComponent;
};

export default withCounter;
