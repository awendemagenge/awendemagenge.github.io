{
 const numArray = [5,0, 7, 77,-20, 300, 51, 2]
 const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]
function findEvenAge(){
    return peopleArray.filter(item=>item.age%2===0)
  }
  console.log(findEvenAge())

  describe("Finds objects with age that is ", function () {

 
    it("Even ", function () {
      assert.deepEqual(findEvenAge(peopleArray),[
        {
        name: "William" ,
        age: 6
        },
        {
        name: "Barney" ,
        age: 80
        }
        ]    );
    });
 
  });













}