{


    /*map:-
    double numbers
    -double age*/
    const numArray = [5,0, 7, 77,-20, 300, 51, 2]
    const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name: "Barney", age: 80}]
    
    function DoubleAges(){
        return peopleArray.map(item=>item.age*2)
      }
    
    describe("Doubles the given objects of ", function () {
    
     
        it("ages ", function () {
          assert.deepEqual(DoubleAges(peopleArray), [30 ,12 ,26 ,160 ]  );
        });
     
      });
    
    
    
    
    
    
    }