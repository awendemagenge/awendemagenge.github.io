"use strict";
/* global assert */
{
// eslint-disable-next-line require-jsdoc
/* global filterRange assert filterRange */
  function filterRange(arr,a,b){
  return arr.filter(item=>item >= a && item <= b)
}
"use strict";

describe("filterRange", function() {

    it("returns the filtered values", function() {
  
      let arr = [5, 3, 8, 1];
  
      let filtered = filterRange(arr, 1, 4); 
  
      assert.deepEqual(filtered, [3, 1]);
    });
  
    it("doesn't change the array", function() {
  
      let arr = [5, 3, 8, 1];
  
      let filtered = filterRange(arr, 1, 4); 
  
      assert.deepEqual(arr, [5,3,8,1]);
    });
  
  });
}