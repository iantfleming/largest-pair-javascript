'use strict';

describe('ArrayCalculator', function(){
  var arrayCalculator;
  beforeEach(function(){
    arrayCalculator = new ArrayCalculator();
  });
  it('an empty array returns 0', function(){
    expect(arrayCalculator.sumLargestNums([])).toEqual([0]);
  });
});
