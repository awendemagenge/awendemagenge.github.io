{
    const numArray = [5,0, 7, 77,-20, 300, 51, 2]
    const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]
    
    
    
    function findAverages(){
    let x=peopleArray.filter(item=>item.age%2!==0)
    let y=x.map(item=>item.age)
    let z=y.reduce((accumulator,item)=>accumulator+item,0)
    return z/y.length
    }
    console.log(findAverages())
    
    describe("Finds the average of age", function () {
                
                 
        it("from odd ages ", function () {
          assert.deepEqual(findAverages(peopleArray),14);
        });
     
      });
    
    
    
    
    
    
    
    
    
    }