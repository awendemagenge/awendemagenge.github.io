{
    
    
    function factorial(n){
    if(n===1||n===0){return 1}
    else{
      return n*factorial(n-1)
    }
  }
  console.log(factorial(4))

  describe("finds the factorial of n", function () {
    
     
    it("4 factorial is 24", function () {
      assert.deepEqual(factorial(4),24);
    });
 
  });








}

