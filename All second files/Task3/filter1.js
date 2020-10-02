{
  const numArray = [5,0, 7, 77,-20, 300, 51, 2]
  const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]

    
function AgeGreaterTen(){
    return peopleArray.filter(item=>item.age>10)
  }
  console.log(AgeGreaterTen())

  describe("Finds objects with age that is greater ", function () {

 
    it("than 10 ", function () {
      assert.deepEqual(AgeGreaterTen(peopleArray),  [
        { name: "Sam" ,age: 15},
        {name: "Lucy" ,age: 13},{name: "Barney" ,age: 80} ]  );
    });
 
  });










}
  