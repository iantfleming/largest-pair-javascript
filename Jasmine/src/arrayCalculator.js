'use strict';

class ArrayCalculator {

  sumLargestNums(arr) {
    if(arr.length === 0 ) {
      return 0
    } else
      return this.sumTwoNums(arr)
  }

  sumTwoNums(arr) {
    const sum = arr.reduce((num1, num2) => num1 + num2)
    return sum
  }
}
