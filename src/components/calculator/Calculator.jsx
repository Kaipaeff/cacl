import React, { useState, useRef, useEffect } from "react";
import './calculator.css'

import Buttons from '../../buttons/Buttons'
import { evalExpression } from "../../functions/functions";


export default function Calculator() {

  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleClick = (val) => {

    const operators = ['/', '*', '-', '=', '+'];

    try {
      if (val === '=') {
        if (value) {
          setValue((prev) => {
            const newValue = evalExpression(prev);
            return newValue;
          });
        } else {
          setValue('')
        }
      } else if (val === 'AC') {
        setValue('');
      } else {
        setValue((prev) => {
          if (prev === '' && (val === '0' || operators.includes(val))) {
            return '';
          } else if (operators.includes(val) && operators.includes(prev.charAt(prev.length - 1))) {
            return prev.slice(0, -1) + val;
          } else {
            return prev + val;
          }
        });
      }
    } catch (error) {
      setValue('Ошибка')
      setTimeout(() => {
        setValue('')
      }, 500)
      console.log('Error calculating:', error);
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
