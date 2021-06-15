'use strict';

describe('ArrayCalculator', function(){
  var arrayCalculator;
  beforeEach(function(){
    arrayCalculator = new ArrayCalculator();
  });

  it('responds to the method sumLargestNums', function(){
    expect(arrayCalculator.sumLargestNums([])).toBeDefined();
  })

  it('an empty array returns 0', function(){
    expect(arrayCalculator.sumLargestNums([])).toEqual(0);
  });

  it('array with 1 number returns that number', function(){
    expect(arrayCalculator.sumLargestNums([12])).toEqual(12);
  });

});
