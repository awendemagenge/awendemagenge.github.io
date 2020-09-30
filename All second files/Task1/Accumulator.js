{/* global assert */

  // eslint-disable-next-line require-jsdoc
  /* global Accumulator assert Accumulator */
  function Accumulator() {
    this.value =parseFloat(prompt("enter value"))
    this.value1 = parseFloat(prompt("enter another value")) + this.value
  }
  
  
  
  
  
  let accumulator = new Accumulator(1);  
  
  accumulator.value; 
  accumulator.value1; 
  
  alert(accumulator.value1);

  describe("accumulator", function() {
    accumulator.value=2
    accumulator.value1=3
    accumulator.value1=accumulator.value+accumulator.value1
    
      it("sums and stores the given values ", function() {
        assert.equal(5, accumulator.value1);
        
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






}



  

  


