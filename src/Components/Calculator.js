import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, updateState] = useState({
    total: null,
    next: null,
    operation: null,
    display: 0,
  });

  const displayResult = () => {
    const { total, next, operation } = state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  const calcButton = (e) => {
    const btnName = e.target.innerHTML;
    updateState({
      ...state,
      ...Calculate(state, btnName),
    });
  };

  const list = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'AC',
    '+/-',
    '%',
    '÷',
    '.',
    'x',
    '+',
    '-',
    '=',
    '0',
  ];

  const listItem = list.map((item, index) => (
    <li key={item.toString()} className={`calc-item o-${index + 1}`}>
      <button type="button" onClick={(e) => calcButton(e)}>
        {item}
      </button>
    </li>
  ));

  return (
    <ul className="d-flex">
      <li className="calc-result d-flex o-0">{displayResult()}</li>
      {listItem}
    </ul>
  );
};
export default Calculator;
