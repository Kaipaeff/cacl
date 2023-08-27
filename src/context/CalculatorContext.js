import { useState, useEffect, useRef, createContext } from "react";

import { evalExpression } from "../functions/evalExpression";
import { operators } from "../data/Operators";


export const CalculatorContext = createContext();

export default function CalculatorContextProvider({ children }) {
  const [value, setValue] = useState('');
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
    <CalculatorContext.Provider value={{
      value, setValue, inputRef, handleClick, handleInputChange
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}