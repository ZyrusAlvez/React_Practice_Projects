import { useState } from "react";

export default function App () {

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <span style={toggle ? {display: "none"} : {display: "block"}}>Hello World</span>
      <button onClick={() => toggle ? setToggle(false) : setToggle(true)}>Toggle</button>
    </>
  );
}