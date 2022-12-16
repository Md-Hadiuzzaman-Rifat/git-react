import React from "react";
import Home from './Home'
import ThemeContext from "./context/themeContext"

class Section extends React.Component {
  render() {
    return (
    <div>
        <ThemeContext.Consumer>
            {
                (value)=><Home value={value}></Home>
            }
        </ThemeContext.Consumer>
    </div>)
  }
}
export default Section;
