function getMinMax(str) {
  const words = str.split(' ');
  
  const numbers = [];
  for (const word of words) {
    const num = parseFloat(word);
    if (!isNaN(num) && isFinite(word)) {
      numbers.push(num);
    }
  }
  
  if (numbers.length === 0) {
    return { min: undefined, max: undefined };
  }
  
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  
  return { min, max };
}
