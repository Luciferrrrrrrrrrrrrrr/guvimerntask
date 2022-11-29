// class movie{
//     constructor(title,studio,rating)
//     {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     if(this.rating == undefined){ this.rating = 'PG13'}    
//     }
//     getMoviedetails(){
//         return(`Title & Studio of the Movie is ${this.title} & ${this.studio} with rating of ${this.rating}`);
//     }

//     getPG(movies) {     return movies.filter((movie) => movie.rating === "PG");   } }
        
    
                
            
// let movie1 = new movie("Robot","chennai","ABC");
// let movie2 = new movie("Vikram","Hotstar");
// let movie3 = new movie("Fast an Furious","Warner Bros");
// let movie4 = new movie("Casino Royale","Eon Productions","PG13");
// console.log(movie4.getMoviedetails());
// let arr1 =[movie1,movie2,movie3];
// // let getpg = arr1.filter((element)=>{
// //     for(let i in element.movie){
// //     console.log(element.movie);
// //         }
// //     })
// // console.log(movie1.getMoviedetails());
// console.log(movie.getPG(arr1));

// // console.log(arr1);
// // console.log(getpg);


// class movie{
//     constructor(title,studio,rating="PG13"){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
// }
// static getPG(movies) {     return movies.filter((movie) => movie.rating === "PG13");   } }
// let movie1 = new movie("Robot","chennai","ABC");
// let movie2 = new movie("Vikram","Hotstar");
// let movie3 = new movie("Fast an Furious","Warner Bros");
// let movie4 = new movie("Casino Royale","Eon Productions","PG13");

// let arr123 =[movie1,movie2,movie3,movie4];
// console.log(movie.getPG(arr123));

// class circle{
//     constructor(radius,color){
//         this.radius = radius;
//         this.color = color;
//     }
//     getradius(){
//         return this.radius;
//     }
//     setradius(radius){
//         return this.radius = 10;
//     }
//     getcolor(){
//         return this.color;
//     }
//     setcolor(color){
//         return this.color = "Gray";
//     }
//     string(){
//        return (`Circle[Radius=>${this.radius},Color=>${this.color}]`);
//     }
//     area(){
//         let a = Math.PI * Math.pow(this.radius,2);
//         return (a.toFixed(2));
//     }
//     circumference(){
//         let b = 2*Math.PI*this.radius;
//         return (b.toFixed(2));
//     }
// }

// let circle1 = new circle(19.9,"Black");

// console.log(circle1.getradius());
// // console.log(circle1.setradius());
// console.log(circle1.getcolor());
// // console.log(circle1.setcolor());
// console.log(circle1.string());
// console.log(circle1.area());
// console.log(circle1.circumference());
