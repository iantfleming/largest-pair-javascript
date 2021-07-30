'use strict';

class ArrayCalculator {

  sumLargestNums(arr) {
    if(arr.length === 0 ) {
      return 0
    } else if(arr.length <= 2) {
      return this.sumTwoNums(arr)
    } else {
      this.ascendingOrder(arr)
      arr.shift();
      return this.sumTwoNums(arr)
    }
  }


  sumTwoNums(arr) {
    return arr.reduce((num1, num2) => num1 + num2)
  }

  ascendingOrder(arr) {
    return arr.sort(function(a, b) {return a - b})
  }
}
