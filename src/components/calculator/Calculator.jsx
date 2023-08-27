import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import { buttons } from '../../data/Buttons'
import './calculator.css';

export default function Calculator() {
  const { value, inputRef, handleClick, handleInputChange } = useContext(CalculatorContext);
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
