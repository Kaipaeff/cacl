import React, { useState, useRef, useEffect } from "react";
import './calculator.css'

import Buttons from '../../buttons/Buttons'

export default function Calculator() {

  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })


  const handleClick = (val) => {
    if (val !== 'AC') {
      setValue((prev) => prev + val);
    } else {
      setValue('');
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
