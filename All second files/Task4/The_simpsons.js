function printName(node){
    if(node.descendents===null){
      console.log(node.value)
    }
    else{
      console.log(node.value)
      for(let child of node.descendents){
        printName(child)
      }
    }
  }
  
  class TreeNode {
   constructor(value) {
   this.value = value;
   this.descendents = [];
   }}
  // create nodes with values
  const abe = new TreeNode('Abe');
  const homer = new TreeNode('Homer');
  const bart = new TreeNode('Bart');
  const lisa = new TreeNode('Lisa');
  const maggie = new TreeNode('Maggie');
  // associate root with is descendents
  abe.descendents.push(homer);
  homer.descendents.push(bart, lisa, maggie);
  
  let printResult=printName(abe)
  console.log(printResult)