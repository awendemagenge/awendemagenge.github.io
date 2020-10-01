{
    function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }

  describe("get day of month", function() {

    it("1 day before 30.08.2020 -> day 29", function() {
      assert.equal(getDateAgo(new Date(2015, 31, 8), 1), 7);
    });
  
  
  });



}