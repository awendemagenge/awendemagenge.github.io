{
    const numArray = [5,0, 7, 77,-20, 300, 51, 2]
    const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]
    
    function maxAge(){
        let x=peopleArray.reduce((accumulator,item)=>accumulator>item ? accumulator:item)
        return x
        }
        console.log(maxAge())
    
        describe("Finds object with the maximum of age", function () {
            
             
            it("from the given object ", function () {
              assert.deepEqual(maxAge(peopleArray),{name: "Barney", age: 80});
            });
         
          });
    
    
    
    
    
    
    
    
    
    }