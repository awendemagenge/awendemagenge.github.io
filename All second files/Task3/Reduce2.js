{
const numArray = [5,0, 7, 77,-20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]



function maxValue(){
let x=numArray.reduce((accumulator,item)=>accumulator>item ? accumulator:item )
return x
}
console.log(maxValue())


describe("Finds the maximum value", function () {
        
         
    it("from the given array ", function () {
      assert.deepEqual(maxValue(numArray),300);
    });
 
  });




}





