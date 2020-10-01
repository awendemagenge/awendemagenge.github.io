{
    
 
  let date=new Date("Feb 20,2012,3:12")
  
    function dateFinder(date){
        return date}

  
  
  
  describe("get date", function() {
    it("from Feb 20,2012,3:12", function() {
      assert.equal(dateFinder(date), "Mon Feb 20 2012 03:12:00 GMT-0600 (Central Standard Time)");
    });
  
    
  });
  
  
  }