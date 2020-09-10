/* eslint-disable */ 


function filterLongWords(arr, i) {
  let newArr = []
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length > i) { newArr.push(arr[j]) }
  } return newArr


}