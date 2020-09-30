{
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
  describe("Calculator", function() {
    let calculator;
  
    before(function() {
      calculator = new Calculator;
    });
  
    it("calculate(12 + 34) = 46", function() {
      assert.equal(calculator.calculate("12 + 34"), 46);
    });
  
    it("calculate(34 - 12) = 22", function() {
      assert.equal(calculator.calculate("34 - 12"), 22);
    });
  
    it("add multiplication: calculate(2 * 3) = 6", function() {
      calculator.addMethod("*", (a, b) => a * b);
      assert.equal(calculator.calculate("2 * 3"), 6);
    });
  
    it("add power: calculate(2 ** 3) = 8", function() {
      calculator.addMethod("**", (a, b) => a ** b);
      assert.equal(calculator.calculate("2 ** 3"), 8);
    });
  });










}
