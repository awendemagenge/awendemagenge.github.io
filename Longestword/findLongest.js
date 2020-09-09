/* eslint-disable */ 
let arr=["hi","bye","hello"]
function findLongest(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
  if(max.length<arr[i].length){
    max=arr[i]
  }
    }return max.length
  }