import React from "react";

export const Screen = ({ result }) => {
  return <div className="calculate__screen">{result.valueToShow || 0}</div>;
};
