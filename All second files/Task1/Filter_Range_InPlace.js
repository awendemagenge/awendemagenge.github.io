{
function filterRangeInPlace(arr, a, b) {
    let j=0
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item<a || item> b) {
       arr.splice(j,1)
      j++}
    } 
  
  }

/* global filterRangeInPlace assert filterRangeInPlace */
describe("filterRange In Place", function() {

  it("returns the filtered values from the current array", function() {

    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4)


    assert.deepEqual(arr, [3, 1]);
  });


});





}