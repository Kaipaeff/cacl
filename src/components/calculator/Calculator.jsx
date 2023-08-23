import React from "react";
import style from './calculator.module.css'

import Buttons from '../../buttons/Buttons'

export default function Calculator() {
  return (
    <div className={style.container}>
      <div className={style.output}>
        <input type="text" defaultValue='0' />
      </div>
      <div className={style.buttons}>
        {Buttons.buttons.map(el => <button>{el.val}</button>)}
      </div>
    </div>
  );
}
