import React from "react";
import { Child } from "./Child";

export const Parent = () => {
  const ref = { current: null };
  return (
    <div>
      <button
        onClick={() => {
          ref.current("Parent State");
        }}
      >
        Click To Change Child
      </button>
      <Child mRef={ref} />
    </div>
  );
};
