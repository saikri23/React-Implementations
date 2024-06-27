import { useRef, useState } from "react";
import "./styles.css";
import Refe from "./Refe";
import StopWatch from "./StopWatch";

export default function App() {
  const [state, setState] = useState(0);
  let x = 0;
  const ref = useRef(0);
  return (
    <div className="App">
      <h1>sai</h1>
      <Refe />
      <StopWatch />
    </div>
  );
}
