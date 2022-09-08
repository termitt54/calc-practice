import React from "react";

export const Buttons = ({ onClick, onOperatorClick }) => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operators = ["ac", "±", "%", "÷", "x", "-", "+", "="];

  return (
    <div className="buttons calculate__buttons">
      {operators.map(function (item) {
        return (
          <button
            key={item + "-operator"}
            value={item}
            onClick={(e) => onOperatorClick(e.target.value)}
            className="btn btn_operator"
          >
            {item}
          </button>
        );
      })}

      {numbers.map(function (item) {
        return (
          <button
            key={item + "-number"}
            value={item}
            onClick={(e) => onClick(e.target.value)}
            className="btn btn_number"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
