import React, { useState } from "react";
import { Calculate } from "./components/Calculate";
import "./styles/index.scss"

function App() {

  const [number, setNumber] = useState([
    {
      value: '1',
      class: 'btn btn_number btn_one'
    },
    {
      value: '2',
      class: 'btn btn_number btn_two'
    },
    {
      value: '3',
      class: 'btn btn_number btn_three'
    },
    {
      value: '4',
      class: 'btn btn_number btn_four'
    },
    {
      value: '5',
      class: 'btn btn_number btn_five'
    },
    {
      value: '6',
      class: 'btn btn_number btn_six'
    },
    {
      value: '7',
      class: 'btn btn_number btn_seven'
    },
    {
      value: '8',
      class: 'btn btn_number btn_eight'
    },
    {
      value: '9',
      class: 'btn btn_number btn_nine'
    },
    {
      value: '0',
      class: 'btn btn_number btn_zero'
    },
    {
      value: '.',
      class: 'btn btn_number btn_point'
    },
  ])

  const [operator, setOperator] = useState([
    {
      value: '÷'
    },
    {
      value: 'x'
    },
    {
      value: '-'
    },
    {
      value: '+'
    },
  ])

  return (
    <div className="App">
      <Calculate number={number} operator={operator}/>
    </div>
  );
}

export default App;
