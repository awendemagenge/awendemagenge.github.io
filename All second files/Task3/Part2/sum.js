{
    function sumNumber(n){
    if(n===0){return 0}
    else{
      return n+sumNumber(n-1)
    }
  }
  console.log(sumNumber(4))


  describe("finds the sum of n up to n", function () {
    
     
    it("4 sum up is 10", function () {
      assert.deepEqual(sumNumber(4),10);
    });
 
  });




}