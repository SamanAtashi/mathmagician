import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
list = [
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
];

listItem = this.list.map((item, index) => (
  <li
    key={item.toString()}
    className={`calc-item o-${index + 1}`}
  >
    <button type="button">{item}</button>
  </li>
));

render() {
  return (
    <ul className="d-flex">
      <li className="calc-result d-flex o-0">0</li>
      {this.listItem}
      <li className="calc-item calc-zero o-19">
        <button type="button">0</button>
      </li>
    </ul>
  );
}
}

export default Calculator;
