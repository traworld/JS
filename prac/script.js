// console.log(`Hello`);  // `` is called template literal
// console.log(`i like pizza`);  // `` is called template literal

// window.alert(`this is an alert`);

// to display element document.getElementById(`)

// document.getElementById("firstID").textContent = `HELLO`;
// document.getElementById("secID").textContent = `jai ho:`
//-------------------------------------------------//-----------------------------------------------
// for showing the text from variables

// let sam = "yellow";
// let sammy = "true";
// let crave = "123";

// document.getElementById("p1").textContent = `colour: ${sam}`;
// document.getElementById("p2").textContent = `there or not: ${sammy}`;
// document.getElementById("p3").textContent = `numbers: ${crave}`;

//------------------------------------//------------------------------------------

// how to accept user input 
// by window prompt or html text input

// let userName;
// userName = window.prompt(`give me your name`) ;

// console.log(userName)

//------------------------------------//------------------------------------------

// to get the input from user 

// let userName;

// document.getElementById("click").onclick = function() {
//    userName = document.getElementById("inputName").value
   
//    document.getElementById("userName_Heading").textContent = `Hello ${userName}`
// }

//------------------------------------//------------------------------------------

//type conversion

// different data types behave differently and in strings if we add something then it will act like a string so it will not it will concat so we need to change the string to number 

// let age = window.prompt("Type your age")
// let newAge = Number(age)
//  newAge+=1

//  console.log(newAge, typeof age, typeof newAge);
 
//------------------------------------//------------------------------------------

// using const i will create a circumference calculator

// const PI = 3.14;
// let radius = document.getElementById("inp").value;
// radius  = Number(radius);
// let circumference;

// document.getElementById("value").onclick = function () {
//    let circumference = 2*PI*radius ;
//    console.log(circumference);

//    document.getElementById("ans").textContent = `Your Circumference is = ${circumference} `
   
// }


//------------------------------------//------------------------------------------

// counter application

// let value = 0;


// document.getElementById("increment").onclick = function (){
//     value++;
//     document.getElementById("counts").textContent = value;
 
    
// }
// document.getElementById("decrement").onclick = function (){
//     value--;
//     document.getElementById("counts").textContent = value;
    
// }

// document.getElementById("erase").onclick = function () {
//     value = 0;
//     document.getElementById("counts").textContent = value;
// }



// math it is an object that comes with built in collection of properties and methods

//  Math.Round(2);

// let zoo = Math.Round(12.8);
// console.log(zoo);

//------------------------------------//------------------------------------------


// if else statement = condition is true then it will execute the statement otherwise if the condition is false then it wont

// let ans = 33;

// if (ans<35) {
//     console.log("you have failed the exam");
// }else if(ans==100, ans>90) {
//     console.log("you were outstanding"); 
// }else {
//     console.log("you are good"); 
// }

// else if questions

// let answer;

// answer = document.getElementById("value").value;
// answer=Number(answer)
// document.getElementById("btn").onclick = function (){
// if (answer == Number){

//     if (answer>100){
//         document.getElementById("result").textContent= `You are way to old to access the website`
//     }else if (answer<=12) {
//         document.getElementById("result").textContent = `you are way to young to access the website`
//     }else {
//         document.getElementById("result").textContent = `you are welcome`
    
//     }

// }else{
//     document.getElementById("result").textContent = `the answer should be a number`

// }
//------------------------------------//------------------------------------------


// .checked property 

// const subscribe = document.getElementById("subscribe");
// const visa = document.getElementById("visa");
// const mastercard = document.getElementById("mastercard");
// const paypal = document.getElementById("paypal");
// const submitBtn = document.getElementById("submitBtn");
// const forSubscribe = document.getElementById("forSubscribe");
// const forMethods = document.getElementById("forMethods");

// submitBtn.onclick =  function () {
//     if(subscribe.checked){
//         forSubscribe.textContent=`you are alrady subscribed`
//     } else{
//         forSubscribe.textContent=`you have to subscribe first`
//     }
//     if(visa.checked){
//         forMethods.textContent=`you ar subscribing thorugh visa card`
//     }else if (mastercard.checked){
//         mastercard.textContent=`you are subscribing through mastecard`
//     }else if (paypal.checked){
//         paypal.textContent=`you are subscribing through paypal`
//     }else{
//         forMethods.textContent=`you have to pay first`
//     }

// }

//------------------------------------//------------------------------------------
// ternary operator
// here it is a simpler way to write if else statement
// instead of all you can just write 
// message = (here put condition) age=3 if its true then put ? and start 
// message = age = 3 ?`here you have to put the true statement` :`here you have to put the false statement`;



//------------------------------------//------------------------------------------

// this is a switch statement
// it is used if a lot of chain is there in if else 

// let day = prompt("Enter a day of the week:");

// switch (day.toLowerCase()) {
//   case "monday":
//     alert("Start of the work week!");
//     break;
//   case "tuesday":
//     alert("Second day of the work week.");
//     break;
//   case "wednesday":
//     alert("Midweek already!");
//     break;
//   case "thursday":
//     alert("Almost Friday!");
//     break;
//   case "friday":
//     alert("Weekend is near!");
//     break;
//   case "saturday":
//   case "sunday":
//     alert("It's the weekend!");
//     break;
//   default:
//     alert("Not a valid day.");
// }
