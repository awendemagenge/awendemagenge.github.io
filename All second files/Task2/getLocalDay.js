{
function getLocalDay(date) {
    

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }

  describe("European Day", function() {
    it("5 January 2014 - sunday", function() {
     assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
   });
 
 });









  
}
