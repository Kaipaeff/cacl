import React, { useState } from "react";
import style from './calculator.module.css'

import Buttons from '../../buttons/Buttons'

export default function Calculator() {

  const [value, setValue] = useState('0')

  return (
    <div className={style.container}>
      <div className={style.output}>
        <input type="text" defaultValue={value} />
      </div>
      <div className={style.buttons}>
        {Buttons.buttons.map(el => <button>{el.val}</button>)}
      </div>
    </div>
  );
}
