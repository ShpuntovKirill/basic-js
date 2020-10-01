const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    var count = 0;
    var arr = [];
    for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    }
    for (var i=0; i < arr.length; i++) {
      if (arr[i] == '^^') {
        count++
      }
  }
  return count
};
