// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function() {
//     if(request.status ==200){
//         var data = JSON.parse(request.responseText);
//         let  asiacountries = data.filter((element)=>{
//             if(element.region == "Asia"){
//             console.log(element.name);
//             }
//         });
//         console.log(asiacountries);
//         }
//     }

    
// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function() {
//     if(request.status ==200){
//         var data = JSON.parse(request.responseText);
//         let  asiacountries = data.filter((element)=>{
//             if(element.population <200000){
//             console.log(element.name,element.population);
//             }
//         });
//         console.log(asiacountries);
//         }
//     }

// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function() {
//     if(request.status ==200){
//         var data = JSON.parse(request.responseText);
//         let totalpopulation = data.reduce((acc,curr)=>acc+curr.population,0)
        
//     console.log(totalpopulation)
        
//         }
//     }

// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function() {
//     if(request.status ==200){
//         var data = JSON.parse(request.responseText);
//         let  usd = data.filter((element)=>{
//             for(let i in element.currencies){
//                 if(element.currencies[i].code==="USD"){
//                 console.log(element.name);
//                     }
//             }
//         })
//         }
//     }

// var request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v2/all',true);
// request.send();
// request.onload = function() {
//     if(request.status ==200){
//         var data = JSON.parse(request.responseText);
//         data.forEach(element =>{
//             console.log(`Countries=>${element.name},Capital=>${element.capital},Flags=>${element.flag}`);
            
//         });
//     }
//         }
    