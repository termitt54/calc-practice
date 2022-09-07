import React from "react";

export const Buttons = ({number, operator, clickNumber, clickOperator, equils, clearAll, negative, percent}) => {
    return (
        <div className="buttons calculate__buttons">
        <button onClick={clearAll} className="btn btn_ac">AC</button>
        <button onClick={negative} className="btn">±</button>
        <button onClick={percent} className="btn">%</button>

        {operator.map(function (item) {
          return <button value={item.value} onClick={clickOperator} className="btn btn_operator">{item.value}</button>;
        })}

        <button onClick={equils} className="btn btn_operator btn_result">=</button>

        {number.map(function (item) {
          return (
            <button
              value={item.value}
              onClick={clickNumber}
              className={item.class}
            >
              {item.value}
            </button>
          );
        })}

      </div>
    )
}