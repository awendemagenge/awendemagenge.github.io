{
    let arrange=function (arr){return arr.sort((a,b)=>b-a)} 
    
describe("Arrange array of numbers", function() {
   
  

    it("from top to down", function() {
       
     let arr=[1,2,3]

     let reArrange = arrange(arr)
      assert.deepEqual(reArrange,[3,2,1]);
    });
  

  });
}


