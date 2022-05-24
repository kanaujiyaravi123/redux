import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum } from "./actions";
import { decNum } from "./actions";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux</h1>
      <div>
        <div>{myState}</div>
        <button onClick={() => dispatch(incNum())}>inc</button>
        <button onClick={() => dispatch(decNum())}>dec</button>
      </div>
    </div>
  );
}

export default App;
