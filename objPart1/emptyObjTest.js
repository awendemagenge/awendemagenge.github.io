"use strict";
/* global isEmpty,sumSalaries,multiplyNumeric assert isEmpty,sumSalaries,multiplyNumeric */


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