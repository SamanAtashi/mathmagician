import React, { Component } from 'react';
import Calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: 0,
    };
  }

    calcButton = (e) => {
      const btnName = e.target.innerHTML;
      const { total, next, operation } = Calculate(this.state, btnName);
      if (btnName === 'AC') {
        this.setState({
          display: 0, total, next, operation,
        });
      } else if (btnName === '=') {
        this.setState({
          display: total, total, next, operation,
        });
      } else if (btnName === '+/-') {
        this.setState({
          display: next || total, total, next, operation,
        });
      } else {
        this.setState((preState) => ({ display: btnName, ...Calculate(preState, btnName) }));
      }
    }

    render() {
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
        <li
          key={item.toString()}
          className={`calc-item o-${index + 1}`}
        >
          <button type="button" onClick={this.calcButton}>
            {item}
          </button>
        </li>
      ));

      const { display } = this.state;

      return (
        <ul className="d-flex">
          <li className="calc-result d-flex o-0">{display}</li>
          {listItem}
        </ul>
      );
    }
}

export default Calculator;
