import { evaluate } from 'mathjs';
import { resultFormat } from './resultFormat';

export const evalExpression = (expression, setValue) => {
  try {
    const result = evaluate(expression);
    return resultFormat(result);
  } catch (error) {
    setValue('Ошибка')
    setTimeout(() => {
      setValue('')
    }, 500)
    console.log('calculating function error:', error);
  }
};