const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    this.counter = 1;                                                               //--nesting level of flat array
    if (arr.some((item) => Array.isArray(item))) {                                  //--check that any array element is Array
      let arr2 = arr.reduce((result, element) => result.concat(element), []);       //--get new array from given array with nesting level less by 1 
      this.calculateDepth(arr2);                                                    //--repeat this function for new array
      this.counter++;                                                               //--increase counter of nesting levels
    }
    return this.counter;
  }
};