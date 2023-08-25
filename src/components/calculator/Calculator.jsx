import React, { useState, useRef, useEffect } from "react";
import './calculator.css'

import Buttons from '../../buttons/Buttons'
import { evaluate } from 'mathjs';

const evalExpression = (expression) => {
  const result = evaluate(expression);
  return result;
}


export default function Calculator() {

  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })


  const handleClick = (val) => {

    const operators = ['/', '*', '-', '=', '+'];

    if (val === '=') {
      try {
        setValue(evalExpression(value).toString())
      } catch (error) {
        setValue('Ошибка')

        setTimeout(() => {
          setValue('')
        }, 2000)
        console.log('Error calculating:', error);
      }
    } else {
      value === '' && (val === '0' || operators.includes(val))
        ? setValue('')
        : val !== 'AC' ? setValue((prev) => prev + val) : setValue('')
    }
  }


  const handleInputChange = (event) => {
    setValue(event.target.value)
  }


  return (
    <div className='container'>
      <div className='output'>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="0"
          style={{
            color: value === 'Ошибка' ? 'red' : 'white',
            fontSize: value === 'Ошибка' ? '42px' : '78px'
          }}
        />
      </div>

      <div className='buttons'>
        {Buttons.map(el =>
          <button
            onClick={() => { handleClick(el.val) }}
            className={el.operation ? 'button operation' : 'button'}
            key={el.id}>
            {el.val}
          </button>
        )}
      </div>

    </div>
  );
}
