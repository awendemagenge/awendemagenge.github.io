/* eslint-disable */ 
/*1.Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "pete"
delete user.name


/*2 Check for emptiness
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/
/**
 * Returns boolean
 *
 * @param {object} empty
 * @return {true or false} if object is empty returns true otherwise returns false
 */

let obj = {}
function isEmpty(obj) {
  for (key in obj) {
    return false
  } return true

}
console.log(isEmpty(obj))

/*3.We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.*/
/**
 * Returns sum of numbers
 * @param {object} input is object
 * @return {number} total salary/total number
 */



function sumSalaries(salaries) {
  let sum = 0
  for (key in salaries) {
    sum = sum + salaries[key]
  } return sum
}
console.log(sumSalaries(salaries))

/*4.Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.*/

/*let menu = {
  width: 200,
  height: 300,
 
};*/
/**
 * Returns value of objects
 * @param {object} input object
 * @return {number} c is a number
 */



function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key]=obj[key]* 2;
      }
    }
  }

/*5 Using "this" in object literal
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?*/
/**
 * Returns nothing
 * @return nothing
 */

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let use = makeUser();

console.log(use.ref.name ); // What's the result?
//returns nothing because "this" should locate a function plus ref property is given to other not name