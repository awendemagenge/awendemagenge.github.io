{
  let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
let date = new Date(2014, 0, 3)

function getWeekDay(date) {
  return weekDays[date.getDay()];
}


describe("getWeekDay", function() {
  it("3 January 2014 - friday", function() {
    assert.equal(getWeekDay(new Date(2014, 0, 3)), 'FR');
  });

  
});


}