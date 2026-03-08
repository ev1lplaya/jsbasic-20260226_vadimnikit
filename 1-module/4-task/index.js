function checkSpam(str) {
  let lowstr = str.toLowerCase();
  if (lowstr.includes('1xbet') || lowstr.includes('xxx')) {
    return true
  }
  return false
}
