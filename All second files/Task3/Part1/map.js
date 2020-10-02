{


/*map:-
double numbers
-double age*/
const numArray = [5,0, 7, 77,-20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]

function DoubleNumbers(){
return numArray.map(item=>item*2)}
console.log(DoubleNumbers())

describe("Doubles the given array ", function () {

 
    it("numbers ", function () {
      assert.deepEqual(DoubleNumbers(numArray), [10 ,0 ,14 ,154 ,-40 ,600 ,102 ,4] );
    });
 
  });






}
