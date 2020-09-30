"use strict";
/* global sum multiply assert sum multiply */

describe("sum and multiply", function() {

    it("1 + 2 + 3 is 6", function() {
      assert.equal(sum([1,2,3]),6);
    });
  
    it("2*2*3 is 12", function() {
      assert.equal(multiply([2,2,3]),12);
    });


  });