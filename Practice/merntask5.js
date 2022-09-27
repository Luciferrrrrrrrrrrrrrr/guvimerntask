// var arr1 = [1,2,3,4,5,6];
// //anonymous print odd number
// function oddNumber(input){
//     for(let i=0;i<input.length;i++)
//     {
//         if((input[i] % 2 )!= 0)
// console.log(input[i]);
//     }
// } oddNumber(arr1);
// //IIFE print oddnumbers
// (function (input){
//     for(let i=0;i<input.length;i++)
//     {  if((input[i] % 2 )!= 0){
//         console.log(input[i]);}
//             }
// })(arr1);
// Arrow function - odd number
// var oddNumber = (input)=>{
//     for(let i=0;i<input.length;i++)
//     {
//         if((input[i] % 2 )!= 0){
// console.log(input[i]);
//     }
// }}
// oddNumber(arr1);

// //anonymous sumofnumbers
// var arr2 =[10,20,30,40,50,60];
// function issumofNumbers(input){
//     let sum=0
//     for(let i=0;i<input.length;i++){
//         sum=sum+input[i];
//     }
//     console.log("sum of numbers in array",sum);
// }
// issumofNumbers(arr2);
// //IIFE sum ofnumbers
// (function(input1){
//     let sum=0
//     for(let i=0;i<input1.length;i++){
//         sum=sum+input1[i];
//     }
//     console.log("sum of numbers in array",sum);
// })(arr2);

// arrow function- Sum of numbers
// var sumofNumbers=(input)=>{
    //     let sum=0
    //     for(let i=0;i<input.length;i++){
    //         sum=sum+input[i];
    //     }
    //     console.log("sum of numbers in array",sum);
    // }
    // sumofNumbers(arr2);

//anonymous title case  
// var arr4 = ["CHANGE", "TO", "TITLE", "CASE"]; 
// var result=[]; 
// // function titleCase(strArr) {
// //      for (let i = 0; i < strArr.length; i++) { 
// //         let str = strArr[i].toLowerCase().split(' '); 
// //         for (var j = 0; j < str.length; j++) { 
// //             str[j] = str[j][0].toUpperCase() + str[j].slice(1); } 
// //             let output=str.join(','); 
// //             result.push(output);
// //              }console.log(result);}
// //              titleCase(arr4);
// IIFE title case 
// (function(strArr1){
//     for (let i = 0; i < strArr1.length; i++) { 
//         let str = strArr1[i].toLowerCase().split(' '); 
//         for (var j = 0; j < str.length; j++) { 
//             str[j] = str[j][0].toUpperCase() + str[j].slice(1); } 
//             let output=str.join(','); 
//             result.push(output);
//              }console.log(result);
// })(arr4);
// arrow function - title case
// var titleCase=(strArr)=>{
//     // //      for (let i = 0; i < strArr.length; i++) { 
//     // //         let str = strArr[i].toLowerCase().split(' '); 
//     // //         for (var j = 0; j < str.length; j++) { 
//     // //             str[j] = str[j][0].toUpperCase() + str[j].slice(1); } 
//     // //             let output=str.join(','); 
//     // //             result.push(output);
//     // //              }console.log(result);}
//     // //              titleCase(arr4);

// var number = [2,3,7,9,10,11,12,13,17,21,23,27,89,100,99,111,121,189,177,207,305,987,786];
// function primeNumbers(input){
//     for(let i=0;i<input.length;i++){
//         var num=0;
//         for(let j=0;j<=input[i];j++){
//         if(input[i]%j == 0)
//         num++;
//      } if(num==2){
//         console.log(input[i]);
//      }
//     }}
//     primeNumbers(number);
    // IIFE prime number
    // (function(number1){
    //     for(let i=0;i<number1.length;i++){
    //         var num=0;
    //         for(let j=0;j<=number1[i];j++){
    //         if(number1[i]%j == 0)
    //         num++;
    //      } if(num==2){
    //         console.log(number[i]);
    //      }
    //     }})(number);

    // arrow function-Primenumbers
    // var primeNumbers=(input)=>{
        //     for(let i=0;i<input.length;i++){
        //         var num=0;
        //         for(let j=0;j<=input[i];j++){
        //         if(input[i]%j == 0)
        //         num++;
        //      } if(num==2){
        //         console.log(input[i]);
        //      }
        //     }}
        //     primeNumbers(number);

// anonymous - Palindrome
// var string = ["abcdcba","eye","anbu","aswin","britto"];

// function reverseString(input){
//     for(let i=0;i<input.length;i++){
//     let rev = input[i].split('').reverse().join("");
//     if(input[i]==rev){
//         console.log("the given string is palindrome ->",input[i]);
//     }
//     else{
//         console.log("the given string is not Palindrome ->",input[i]);
//     }
//         }
//     }
// reverseString(string);
// IIFE - Palindrome
// (function (string1){
//     for(let i=0;i<string1.length;i++){
//         let rev = string1[i].split('').reverse().join("");
//         if(string1[i]==rev){
//             console.log("the given string is palindrome ->",string1[i]);
//         }
//         else{
//             console.log("the given string is not Palindrome ->",string1[i]);
//         }
//             }
//         })(string);

// arrow function - palindrome
// var reverseString=(input)=>{
    //     for(let i=0;i<input.length;i++){
    //     let rev = input[i].split('').reverse().join("");
    //     if(input[i]==rev){
    //         console.log("the given string is palindrome ->",input[i]);
    //     }
    //     else{
    //         console.log("the given string is not Palindrome ->",input[i]);
    //     }
    //         }
    //     }
    // reverseString(string);

// anonymous - Remove Duplicate  - query for string removal.
// var Duplicate = [1,1,2,2,3,4,13,13,15,15,18,19,"anbu","Anbu"];

// function Dup(input){
//     for(let i=0;i<input.length;i++){
//         for(let j=0;j<input.length;j++){
//             if(i!=j){
//             if (input[i]==input[j]){
//                 input.splice(j,1);
//     }}

// } }
// console.log(input.join(','));
// }
//           Dup(Duplicate);
// // IIFE - Remove Duplicate - query for string removal.
// (function(){
//     for(let i=0;i<Duplicate1.length;i++){
//         for(let j=0;j<Duplicate1.length;j++){
//             if(i!=j){
//             if (Duplicate1[i]==Duplicate1[j]){
//                 input.splice(j,1);
//     }}

// } }
// console.log(Duplicate1.join(','));
// })(Duplicate);

// anonymous - find median in array 

// var a1 =[1,2,3];
// var a2 =[4,5,6,7];
// var b1 =[1,2,3];
// var b2 =[4,5,6,7];
// function medianofarray(ar1,ar2){
//     let array1=ar1.concat(ar2).sort();
//  let len =  array1.length;
//  if(len%2==0){
//     console.log(len);
// let med1 = (array1[len/2-1]+array1[len/2])/2;
// console.log(med1);
// }
// if(len%2==1){
//     console.log(len);
//     let med2= (array1[Math.floor([len/2])]);
//     console.log(med2);
// }
// }
// medianofarray(a1,a2);
// medianofarray(b1,b2);

// IIFE -find median in array 
// (function(arr1,arr2){
//     let array1=arr1.concat(arr2).sort();
//     let len =  array1.length;
//     if(len%2==0){
//    let med1 = (array1[len/2-1]+array1[len/2])/2;
//    console.log(med1);
//    }
//    if(len%2==1){
//        let med2= (array1[Math.floor([len/2])]);
//        console.log(med2);
//    }
// })(a1,a2);

// anonymous - Rotate an array by K times
// var rot =[1,3,5,6,7,8,9];
// var k = 3;
// function rotation(arr,a){
//     for(let i=0;i<a;i++)
//     {
//         let temp=arr[0];
//         for(let j=0;j<arr.length;j++){
//         arr[j]=arr[j+1];
//         } arr[arr.length-1]=temp;
//     } return arr;
// // }
// // console.log(rotation(rot,k));

// (function(){
//     for(i=0;i<k;i++){
//         let temp=rot[0];
//         for(j=0;j<rot.length;j++){
//             rot[j]=rot[j+1];
//         }rot[rot.length-1]=temp;
//         }
//         console.log(rot);
//     })();



