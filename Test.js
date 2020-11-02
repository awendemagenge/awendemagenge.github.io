/*Write a JavaScript function "checkExam" that returns the score of an exam. 
 The function takes an array as it argument, which contains objects with 2 properties. 
 One property is ‘answer’ holding the student answer and the other is ‘key’ holding the correct answer.  
 Correct answers are worth 4 points.  Wrong answers are worth -4 points.  Empty answers are worth -1 points.  For example
[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "b", key: "b" }];→4
[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "",  key: "b" }];→-1*/


//arr1=[{answer:a,key:a},]

function checkExam(arr1) {
    let score = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].answer === arr[i].key) {
            score = score + 4
        }
        else if (arr[i].answer === "") {
            score = score - 1
        }
        else {
            score = score - 4
        }
    }return score

}

console.log(checkExam([{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "",  key: "b" }]))