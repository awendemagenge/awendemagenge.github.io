/* eslint-disable */ 

"use strict";
/**
 * Returns maximum number
 *
 * @param {number} a is number
 * @param {number} b is number
 * @return {number} c is a number
 */
    function max3(a,b,c){
        return c
    }
    /**
 * Returns true or not
 *
 * @param {string} word
 * @return {number} checks vowel or notr**/


function isVowel(string){

    if(string==="a"||string==="e"
    ||string==="i"||string==="o"
    ||string==="u"){

        return true
    }return false
}
/**
 * Returns true or not
 * @param {arr} word
 * @param {i} number
 * @return {number} arr their lengths are greater than i**/

function filterLongWords(arr, i) {
    let newArr = []
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length > i) { newArr.push(arr[j]) }
    } return newArr
  
  
  }

  /**
 * Returns reversed string
 * @param {string} number
 * @return {string} reversed string i**/
  


  function reverse(string) {
    let s = ""
    for (let i = string.length - 1; i >= 0; i--) {
      s = s + string[i]
    } return s
  
  }
  /**
 * Returns reversed string
 * @param {arr} number
 * @return {number} sum && multiplication i**/

  function sum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
      sum=arr[i]+sum
    }return sum
 
  }
 
 
 function multiply(arr){
    let multiply=1
    for(let i=0;i<arr.length;i++){
      multiply=arr[i]*multiply
    }return multiply
 
  }




    
    
 
  
