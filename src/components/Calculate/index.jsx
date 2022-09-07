import React, { useState } from "react";
import { Buttons } from "./components/Buttons";
import { Screen } from "./components/Screen";
import "./index.scss";

export const Calculate = ({ number, operator }) => {
  const [screen, setScreen] = useState("0");
  let [numOne, setNumOne] = useState("");
  let [numTwo, setNumTwo] = useState("");
  let [operation, setOperation] = useState("");
  let [result, setResult] = useState("");
  const [finish, setFinish] = useState(false);

  const clickNumber = (e) => {
    let digit = e.target.value;

    if (numTwo === "" && operation === "") {
      setNumOne((numOne += digit));
      setScreen(numOne);
    } else {
      setNumTwo((numTwo += digit));
      setScreen(numTwo);
    }
  };

  const clickOperator = (e) => {
    let operate = e.target.value;
    setOperation((operation = operate));
  };

  const equils = () => {
    if (numTwo === "") {
      setNumTwo(numOne);
      setScreen(numOne)
    } 

    if (operation === "+") {
      setResult(result = +numOne + +numTwo);
      console.log('res' , result)
      setScreen(result);
      setFinish(true);
      console.log("123")
    }

    if (operation === "-") {
      setResult((result = +numOne - +numTwo));
      setScreen(result);
      setFinish(true);
    }

    if (operation === "x") {
      setResult((result = +numOne * +numTwo));
      setScreen(result);
      setFinish(true);
    }

    if (operation === "÷") {
      setResult((result = +numOne / +numTwo));
      setScreen(result);
      setFinish(true);

      if (numTwo === "0") {
        setScreen("Ошибка");
      }
    }
  };

  if (finish !== false) {
    setNumOne(result);
    setNumTwo("");
    setOperation("");
    setResult("");
    setFinish(false);
  }

  const clearAll = () => {
    setNumOne("");
    setNumTwo("");
    setOperation("");
    setResult("");
    setScreen("0");
    setFinish(false);
  };

  const negative = () => {
    if (numTwo === "") {
      setNumOne(numOne * -1);
      setScreen((numOne = -numOne));
    } else {
      setNumTwo(numTwo * -1);
      setScreen((numTwo = -numTwo));
    }
  };

  const percent = () => {
    if (numTwo === "") {
      setNumOne(numOne / 100);
      setScreen((numOne = numOne / 100));
    } else {
      setNumTwo(numTwo / 100)
      setScreen(numTwo = numTwo / 100)
    }
  };

  console.log(numOne, operation, numTwo, result, finish);

  return (
    <div className="calculate">
      <Screen screen={screen} />
      <Buttons
        number={number}
        operator={operator}
        clickNumber={clickNumber}
        clickOperator={clickOperator}
        equils={equils}
        clearAll={clearAll}
        negative={negative}
        percent={percent}
      />
    </div>
  );
};
