/* eslint-disable */ 
let word="Hello world"
let arr=word.split(" ")

function findLongest(arr){
  
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
  if(max.length<arr[i].length){
    max=arr[i]
  }
    }return max.length
  }