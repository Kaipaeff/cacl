import React, { useState } from "react";
import './calculator.css'

import Buttons from '../../buttons/Buttons'

export default function Calculator() {


  const [value, setValue] = useState('0')


  return (
    <div className='container'>

      <div className='output'>
        <input type="text" defaultValue={value} />
      </div>

      <div className='buttons'>
        {Buttons.map(el => <button className={el.operation ? 'button operation' : 'button'} key={el.id}>{el.val}</button>)}
      </div>

    </div>
  );
}
