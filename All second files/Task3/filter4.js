
{
const numArray = [5,0, 7, 77,-20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]

function GreaterTen(){
    let newArr=[]
    let x= peopleArray.filter(item=>item.age>10)
    for(let value of Object.values(x)){
     newArr.push(value.age)
    }return newArr
  }
  console.log(GreaterTen())


  describe("Finds age elements that is greater than 10", function () {
    
     
    it("from the given object ", function () {
      assert.deepEqual(GreaterTen(numArray), [15 ,13 ,80 ]  );
    });
 
  });





  

}