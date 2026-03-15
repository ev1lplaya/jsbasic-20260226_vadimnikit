function filterRange(arr, a, b) {
  return arr.reduce((acc, item) => {
    if (item >= a && item <= b) {
      acc.push(item);
    }
    return acc;
  }, []);
  
  
}
