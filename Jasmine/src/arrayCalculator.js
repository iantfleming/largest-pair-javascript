'use strict';

class ArrayCalculator {

  sumLargestNums(arr) {
    if(arr.length === 0 ) {
      return 0
    } else if(arr.length <= 2) {
      return this.sumTwoNums(arr)
    } else {
      return this.sumMoreThanTwo(arr)
    }
  }


  sumTwoNums(arr) {
    return arr.reduce((num1, num2) => num1 + num2)
  }

  sumMoreThanTwo(arr) {
    return arr.sort(function(a, b) {return a - b})
  }
}
