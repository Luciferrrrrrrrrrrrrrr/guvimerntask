
// // // // var rot =[1,3,5,6,7,8,9];
// // // // var k = 3;
// // // // function rotation(arr,a){
// // // //     for(let i=0;i<a;i++)
// // // //     {
// // // //         let temp=arr[0];
// // // //         for(let j=0;j<arr.length;j++){
// // // //         arr[j]=arr[j+1];
// // // //         } arr[arr.length-1]=temp;
// // // //     } return arr;
// // // // }
// // // // console.log(rotation(rot,k));

// // // // // var input = ["CHANGE", "TO", "TITLE", "CASE"]; 
// // // // // var result=[]; 
// // // // // var titleCase = function (strArr) {
// // // // //      for (let i = 0; i < strArr.length; i++) { 
// // // // //         let str = strArr[i].toLowerCase().split(' '); 
// // // // //         for (var j = 0; j < str.length; j++) { 
// // // // //             str[j] = str[j][0].toUpperCase() + str[j].slice(1); } 
// // // // //             let output=str.join(','); 
// // // // //             result.push(output);
// // // // //              }}
// // // // //              titleCase(input);
// // // // //              console.log(result);

// // // // Arrow function odd naumber in array
// // // var arr1 = [1,2,3,4,5,6];
// // // var sumofNumbers=(input)=>{
// // //         let sum=0
// // //         for(let i=0;i<input.length;i++){
// // //             sum=sum+input[i];
// // //         }
// // //         console.log("sum of numbers in array",sum);
// // //     }
// // //     sumofNumbers(arr1);

// // //  //IIFE print oddnumbers
// // // //  var arr1 = [1,2,3,4,5,6];
// // // // var arr4 = ["CHANGE", "TO", "TITLE", "CASE"]; 
// // // // var result =[];
// // // //  (function(strArr1){
// // // //         for (let i = 0; i < strArr1.length; i++) { 
// // // //             let str = strArr1[i].toLowerCase().split(' '); 
// // // //             for (var j = 0; j < str.length; j++) { 
// // // //                 str[j] = str[j][0].toUpperCase() + str[j].slice(1); } 
// // // //                 let output=str.join(','); 
// // // //                 result.push(output);
// // // //                  }console.log(result);
// // // //     })(arr4);


// // // class movie{
// // //     constructor(title,studio,rating)
// // //     {
// // //         this.title = title;
// // //         this.studio = studio;
// // //         this.rating = rating;
// // //     }
// // //     setdefaultRating(){
// // //         if(this.rating == null){
// // //             this.rating = "PG";
// // //         }
        
// // //     }
// // //     getMoviedetails(){
// // //         return(`Title & Studio of the Movie is ${this.title} & ${this.studio} with rating of ${this.rating}`);
// // //     }
// // // }
// // // let movie1 = new movie("Robot","chennai","PG13");
// // // let movie2 = new movie("Vikram","Hotstar",);
// // // let movie3 = new movie("Fast an Furious","Warner Bros",);


// // // movie2.setdefaultRating();
// // // movie3.setdefaultRating();
// // // console.log(movie1.getMoviedetails());
// // // console.log(movie2.getMoviedetails());
// // // console.log(movie3.getMoviedetails());


// // let student = [{a:"a",m:18},{a:"a",m:20},{a:"a",m:20},{a:"a",m:20},{a:"a",m:20}];

// // let re = student.filter((ele)=>{
    
// //     return ele.m>=19;
// // }
// // );
// // console.log(re);

// // let arr = [1,2,3,4,5,6];

// // let finalval = arr.reduce((acc,curr)=>{

// //     return acc-curr;
// // });
// // console.log(finalval);

// // let student = [{a:"a",m:18},{a:"a",m:20},{a:"a",m:20},{a:"a",m:20},{a:"a",m:20}];

// // let finalval = student.reduce((acc,curr)=>{
// //     let totalmarks = 0;
// //     if(acc.m){
// //         totalmarks = acc.m;
// //     }else{
// //         totalmarks=acc;
// //     }
    
// //     return totalmarks+curr.m;
// // });
// // console.log(finalval);




// //     var request = new XMLHttpRequest();
// // request.open('GET','https://restcountries.com/v2/all',true);
// // request.send();
// // request.onload = function() {
// //     if(request.status ==200){
// //         var data = JSON.parse(request.responseText);
// //         let  usd = data.filter((element)=>{
// //             for(let i in element.currencies){
// //                 if(element.currencies[i].code==="USD"){
// //                     return true;
// //                 }
// //             }
        
// //         }).map((element)=>element.name);
// //         console.log(usd);
// //         }
// //     }

// console.log(018 - 015);

console.log(0.1+0.2);