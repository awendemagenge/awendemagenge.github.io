/*eslint-disable*/

let calculator = {
    read: function() {
        this.value1 = parseFloat(prompt("enter value1?"))
        this.value2 = parseFloat(prompt("enter value1?"))
    },
    sum: function() {
        let x = this.value1 + this.value2
        return x
    },
multiply: function() {
    let y = this.value1 * this.value2
        return y
    }
}










