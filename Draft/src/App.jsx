import { useState, createContext } from "react";
import "./App.css"
import ComponentD from "./ComponentD";

export const userContext = createContext();

export default function App () {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <span style={toggle ? {display: "none"} : {display: "block"}}>Hello World</span>
      <button onClick={() => toggle ? setToggle(false) : setToggle(true)}>Toggle</button>

      <userContext.Provider value="zyy">
       <ComponentD/>
      </userContext.Provider>
      
    </div>
  );
}