function camelize(str) {
  const words = str.split('-');
  
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word; 
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  
  return camelCaseWords.join('');
}
