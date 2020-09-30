"use strict";
/*eslint-disable*/
/* global isEmpty,sumSalaries,multiplyNumeric,sum,multiply assert,sum(),calculator.sum,calculator.multiply isEmpty,sumSalaries,multiplyNumeric */
describe("the sum is", function() {
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


describe("is object empty?", function() {

    it(" yes object is empty", function() {
      assert.equal(true, isEmpty({}));
    });
  

  });
  describe("the total salary is?", function() {

    it(" 390", function() {
      assert.equal(390, sumSalaries({
        John: 100,
        Ann: 160,
        Pete: 130
      }));
    });
  

  });

  describe("multiply numbers with 2", function() {
    it("gives 400,600 and 'my menu'", function() {
      let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
      let x = multiplyNumeric(menu);
      assert.equal(menu.width, 400);
      assert.equal(menu.height, 600);
      assert.equal(menu.title, "My menu");
    });
  
    it("returns nothing", function() {
      assert.isUndefined( multiplyNumeric({}) );
    });
  
  });
  

  


