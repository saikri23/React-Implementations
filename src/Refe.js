import { useRef, useState } from "react";
import "./styles.css";

const refe = () => {
  const [state, setState] = useState(0);
  let x = 0;
  const ref = useRef(0);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            console.log("Let", x);
            x += 1;
          }}
          style={{ marginRight: "10px", width: "100px" }}
        >
          Inc Let
        </button>
        <span>{x}</span>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("state", state);
            setState(state + 1);
          }}
          style={{ marginRight: "10px", width: "100px" }}
        >
          Inc State
        </button>
        <span>{state}</span>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("Ref", ref.current);
            ref.current += 1;
          }}
          style={{ marginRight: "10px", width: "100px" }}
        >
          Inc Ref
        </button>
        <span>{ref.current}</span>
      </div>
    </div>
  );
};

export default refe;
