"user-strict"
function sayHi() {
    console.log(this)

}
setTimeout(sayHi, 5000);