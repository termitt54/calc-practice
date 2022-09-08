import React, { useState } from "react";
import { Buttons } from "./components/Buttons";
import { Screen } from "./components/Screen";
import "./index.scss";

export const Calculate = () => {
  const [result, setResult] = useState({ valueToShow: "", value: "" });

  const onClick = (value) => {
    setResult({
      valueToShow: result.valueToShow + value,
      value: result.value + value,
    });
  };

  const calculate = () => {
    const regExp = /[+,\-,x,÷,%]/;

    const operator = result.value.match(regExp);

    if (!operator) return result.value;

    const operands = result.value.split(operator[0]).map((i) => +i);

    if (!operands[1]) return operands[0];

    switch (operator[0]) {
      case "+": {
        return operands[0] + operands[1];
      }
      case "-": {
        return operands[0] - operands[1];
      }
      case "x": {
        return operands[0] * operands[1];
      }
      case "÷": {
        return operands[0] / operands[1];
      }
      default:
        return;
    }
  };

  const onOperatorClick = (operator) => {
    switch (operator) {
      case "ac": {
        setResult({
          value: "",
          valueToShow: "",
        });
        return;
      }
      case "=": {
        let res = calculate();
        setResult({
          valueToShow: res,
          value: res,
        });
        return;
      }

      default: {
        let res = calculate();
        setResult({ valueToShow: "", value: res + operator });
      }
    }
  };

  return (
    <div className="calculate">
      <Screen result={result} />
      <Buttons onClick={onClick} onOperatorClick={onOperatorClick} />
    </div>
  );
};
