/*eslint-disable */
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  console.log(`${key}:${value}`); // name:John, then age:30
}