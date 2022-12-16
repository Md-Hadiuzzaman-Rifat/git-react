import "./App.css";
// import Counter from './components/Basic/Counter'
// import Timer from "./components/Basic/Timer"
// import HOC from "./components/HOC/HOC"
// import Render from "./components/RenderProps/Render";
// import ClickCounter from "./components/RenderProps/ClickCounter";
// import Section from "./components/API/Section";
// import ThemeContext from "./components/API/context/themeContext";
// import UseEffect from "./components/Effect/UseEffect"
// import Timer from "./components/Effect/ClassComponent/Timer"
// import Reducer from "./components/UseReducer/Reducer"
// import Reducer2 from "./components/UseReducer/Reducer2"
import Reducer3 from "./components/UseReducer/Reducer3"

// import Rander from "./components/Practice/Rander"
// import Render from "./components/Practice/Render";
// import ClickCounter from "./components/Practice/ClickCounter";

function App() {
  return (
    <div className="App">
      <h3>Hello World</h3>
      {/* <Counter></Counter> */}
      {/* <Timer></Timer> */}
      {/* <HOC></HOC> */}
      {/* <ClickCounter person={()=>'Rifat.'}></ClickCounter> */}

      {/* <Render>
        {(count, increment) => (
          <ClickCounter count={count} increment={increment}></ClickCounter>
        )}
      </Render> */}

      {/* <ThemeContext.Provider value={{ color: "red" }}>
        <Section></Section>
      </ThemeContext.Provider> */}

      {/* <Render>
        {(count, increment) => (
          <ClickCounter count={count} increment={increment}></ClickCounter>
        )}
      </Render> */}

      {/* <Rander rander={()=>"Rifat"}>
      </Rander> */}

      {/* <UseEffect></UseEffect> */}
      {/* <Timer></Timer> */}

      {/* <Reducer></Reducer> */}
      {/* <Reducer2></Reducer2> */}
      <Reducer3></Reducer3>
    </div>
  );
}

export default App;
