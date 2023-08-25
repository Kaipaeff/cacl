import React, { useRef, useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";

import './calculator.css';

import { buttons } from '../../data/Buttons'
import { operators } from "../../data/Operators";
import { evalExpression } from "../../functions/functions";


export default function Calculator() {

  const { value, setValue } = useContext(AppContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleClick = async (val) => {
    try {
      if (val === '=') {
        if (value) {
          const newValue = await evalExpression(value);
          setValue(newValue);
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
      }, 1000)
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
        {buttons.map(el =>
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
