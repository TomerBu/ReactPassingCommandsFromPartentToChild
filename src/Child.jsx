import { useState } from "react";
export const Child = ({ mRef }) => {
  const [state, setState] = useState("Child State");

  mRef.current = (datum) => {
    setState(datum);
  };
  return <div>My state is {state}</div>;
};
