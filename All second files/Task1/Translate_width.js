/* global camelize assert camelize */

{
function camelize(str) {
  let arr = str.split("")
  let x = arr.indexOf("-")
  let y = x + 1
  arr[y] = arr[y].toUpperCase()

  arr.splice(x, 1)
  return arr.join("")

}


"use strict";


describe("hello-world", function() {

    it("will be translated to helloWorld", function() {
      assert.equal(camelize("hello-world"),"helloWorld");
    });
  

  });



}