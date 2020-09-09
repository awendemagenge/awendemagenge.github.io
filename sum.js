/* eslint-disable */ 
let arr=[1,2,3]
function sum(){
    let sum=0
    for(let i=0;i<arr.length;i++){
      sum=arr[i]+sum
    }return sum
 
  }
 
 
 function multiply(){
    let multiply=1
    for(let i=0;i<arr.length;i++){
      multiply=arr[i]*multiply
    }return multiply
 
  }