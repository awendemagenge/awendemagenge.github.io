{
 const numArray = [5,0, 7, 77,-20, 300, 51, 2]
 const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]


function findEvenAgeElements(){
    let newArr=[]
    let x=peopleArray.filter(item=>item.age%2===0)
    for(let value of Object.values(x)){
      newArr.push(value.age)
    }return newArr
  }
  console.log(findEvenAgeElements())


  describe("Finds Even age elements ", function () {
    
     
    it("from the given object ", function () {
      assert.deepEqual(findEvenAgeElements(numArray), [6 ,80]  );
    });
 
  });








}