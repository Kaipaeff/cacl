export const resultFormat = (result) => {
  const parsedResult = parseFloat(result);
  return parsedResult % 1 === 0
    ? parsedResult.toString()
    : parsedResult.toFixed(2).toString();
}