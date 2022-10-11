// // class person{
// //     constructor(firstName,lastName,email,dob,gender,country,state,zipcode,pancard,adharNo)
// //     {
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //         this.email = email;
// //         this.dob = dob;
// //         this.gender =gender;
// //         this.country=country;
// //         this.state=state;
// //         this.zipcode=zipcode;
// //         this.pancard=pancard;
// //         this.adharNo=adharNo;
// //     }
// //     getpersonDetails(){
// //         return(`The Person details below:\n${this.firstName}\n${this.lastName}\n${this.email}\n${this.dob}\n${this.gender}\n${this.country}\n${this.state}\n${this.zipcode}\n${this.pancard}\n${this.adharNo}`);
// //     }
// // }
// // let person1 = new person("Anbazhagan","Gunasekaran","anbu@gmail.com","22.10.2022","M","India","TN","600000","123456","123456789012");
// // console.log(person1.getpersonDetails());


// class uber{
//     constructor(custName,pickupLocation,dropLocation,distance,rate,waitingPeriod,peopleCount,DriverName,vechNo,model,driverPhno){
//     this.custName=custName;
//     this.pickupLocation=pickupLocation;
//     this.dropLocation=dropLocation;
//     this.distance=distance;
//     this.rate=rate;
//     this.waitingPeriod=waitingPeriod;
//     this.peopleCount=peopleCount;
//     this.DriverName=DriverName;
//     this.vechNo=vechNo;
//     this.model=model;
//     this.driverPhno=driverPhno;
//     }
//     gettripdetails(){
//         return(`Customer_Name:${this.custName}, Pickup:${this.pickupLocation}, Drop:${this.dropLocation}\nTravelling Distance Km:${this.distance} & No.of People Boarding:${this.peopleCount}\nDriver_Info:${this.DriverName},Mobile_No:${this.driverPhno} \nVehicle No:${this.vechNo} Model:${this.model}`);
//     }
//     getuberPrice(){
//         let totalCharges =  (this.rate*this.distance)+(this.waitingPeriod*this.peopleCount);
//         return(`Total Amount for the Trip Rs:${totalCharges - 0.95} only/-`);
//     }
// }
// let customer1 = new uber("ANBAZHAGAN.G","Villivakkam","Marian Beach",15,148.13,1,1,"RAMYA.A","TN02BU8950","ACCESS125","9876543210");
// console.log(customer1.gettripdetails());
// console.log(customer1.getuberPrice());
