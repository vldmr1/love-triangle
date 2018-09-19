/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n = 0;
  let arrayLength = preferences.length;
  for (let i = 1; i < arrayLength + 1; i++) {
    if (preferences[i-1] != i) {
      let a = preferences[i-1];
      if (preferences[a-1] !== i) {
        let b = preferences[a-1];
        if (preferences[b-1] === i) {
          n++
        }
      }
    }

  }
  return n/3;
};
