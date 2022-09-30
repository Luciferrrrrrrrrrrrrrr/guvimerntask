// // //function sum(){
// //     let a = 0; 
// //     for (let i = 0; i < array.length; i++) 
// //     { a += array[i]; 
// //     console.log(a);
// //     }
// // }
// // function avg(){
// //     let b = 0; 
// //     for (let i = 0; i < array.length; i++) 
// //     { b += array[i]; 
// //         c=b/5;
// //     console.log(b);
// //     }
// // }

// var array1 =[{ID:1,name:"name 1"},{ID:2,name:"name 2"},{ID:3,name:"name 3"}];

// var index=0;
// console.log(array1);
// for(i=0;i<array1.length;i++){
//     if(array1[i].name =="name 2"){
//         index=i;
//         console.log(index);
//     }
// }
// array1.splice(index,1,{ID:4,name:"name 0"});
// console.log(array1);

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  const inputString = userInput.toString();
  const inputArray = inputString.split(',');
  let n= inputArray.lenght;
  function rotate(inputArray,n)
  {
    let b= inputArray[0];
    let c = index
for(let i=0;i<n;i++)
{
  if(b>inputArray[i])
  {
    b=inputArray[i];
    c=i;}
  console.log(i);
}
});