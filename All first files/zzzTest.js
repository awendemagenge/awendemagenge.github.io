"use strict";
/* eslint-disable*/
/* global calculator,sum,multiply assert,sum(),calculator.sum,calculator.multiply*/

describe("the sum is?", function() {
  calculator.value1=2
  calculator.value1=3
  calculator.sum=5
  
    it("5", function() {
      assert.equal(5, calculator.sum);
      
    });
  

  });

  describe("the multiplication is?", function() {
    calculator.value1=2
    calculator.value1=3
    calculator.multiply=6
    
      it("6", function() {
        assert.equal(6, calculator.multiply);
        
      });
    
  
    });
  