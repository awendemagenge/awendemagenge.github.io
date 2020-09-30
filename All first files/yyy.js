"use strict";
/*eslint-disable*/


function camelize(s) {
  let z = s.indexOf("-")
  let y = z + 1
  let arr = s.split("")
  arr[y] = arr[y].toUpperCase()
  arr.splice(z, 1)
  return arr.join("")
}
