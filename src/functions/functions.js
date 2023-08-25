import { evaluate } from 'mathjs';


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
}

export const resultFormat = (result) => {
  const parsedResult = parseFloat(result);
  return parsedResult % 1 === 0
    ? parsedResult.toString()
    : parsedResult.toFixed(2).toString();
}