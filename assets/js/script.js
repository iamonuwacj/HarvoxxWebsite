
// var num1 = 9
// var num2 = 6

// if (num1 > num2) {
//     console.log(num1 + " is greater than " + num2)
// }
// else {
//     console.log(num2 + " is greater than " + num1)
// }

// var message = "Hello"

// if (message.toLocaleLowerCase() == "hi"){
//     console.log("Hello\n")
// }
// else if (message.toLocaleLowerCase() == "hello"){
//     console.log("How are you\n")
// }else if (message == "I need your help") {
//     console.log("I no dey help")
// }
// else {
//     console.log("Have a nice day")
// }

// var age  = 11
// var level = "JSS1"
// var grade = 80

// if (level == "JSS1"){
//     if (age <= 18 ){
//         if (grade >= 70 ) {
//             console.log("You are allowed")
//         }else {
//             console.log("Your grade is too low\nYou are not allowed.")
//         }
//     }else {
//         console.log("Your age is not allowed")
//     }
// }else {
//     console.log("\nYou are not eligible for this service")
// }

// let username = prompt("Enter Your Username: \n")
// let password = prompt("Enter Your Password")

// if (username.toLowerCase() == "iamonuwacj"){
//     if (password == "123456") {
//         console.alert("Login Successful")
//         console.log("Login Successful")
//     }else {
//         console.error("Password Incorrect")
//     }
// }else {
//     console.error("Username does not exist")
// }

// var age  = 11
// var level = "JSS3"
// var grade = 80

// if (level == "JSS1" && age <= 18 && grade >= 70){
//     console.log("You are allowed")
// }else {
//     console.log ("\nYour level, age or grade is not allowed\n")
// }
// var num1 = 5



// var num = [4, 7, 2, 9, 3, "john", num1, true, [["rice", "stew"], 60, 70]]
// // console.log(num)
// // // console.log(num[0] + num[1])
// // num[5] = "Mary"
// // console.log(num)

// console.log(num[8][0][0])

// var person = {
//     name: "john",
//     age: 27,
//     is_eating: true,
//     results: {
//         maths: 80,
//         English: 99,
//         Physics: {
//             pract: 20,
//             theory: 60,
//             students: ["John", "Mary", "James", {
//                 total_students: 3
//             }],
//         }
//     }
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person.is_eating)
// person.name = "Mary"
// person.hubby = "Football"
// console.log(person.results.Physics.students[3].total_students)

// var x = 0
// while( x < 100 ) {
//     if(x % 2 == 0){
//         console.log(x)
//     }
//     // console.log("ya " + x)
//     x = x + 1
// }

// for(var x = 0; x <= 100; x++){
//     if (x % 2 == 0){
//         console.log(x)
//     }
// }

// functions
// function speak(){
//     console.log("\nI am speaking....\n")
// }

// speak()
// speak()
// speak()

// function sum(x, y){
//     // var num1 = 6
//     // var num2 = 9
//     var sum = x + y
//     console.log(sum)
//     return sum
// }

// sum(5, 10)

// function area(b, h){
//     var  A = (1/2 * b) * h
//     console.log(A)
// }

// area(2, 5)
// area(10, 5)


// var person = {
//     name: "john",
//     age: 27,
//     speak: function(x){
//         console.log(x)
//     }
// }

// person.speak(78)

// console.log(document.getElementById("logo"))

// **********************************************************************************
// var logo = document.getElementById(elementId="logo")
// logo.style.backgroundColor = "red"
// logo.style.color = "green"
// logo.innerHTML = "yayayayayayaya"
// console.log(logo)

// var para = document.getElementsByClassName(classNames="para ")
// for(var x = 0; x < 160; x++){
//     if (x % 2 == 0) {
//         para[x].style.color = "blue"
//     }else {
//         para[x].style.color = "purple"
//     }

// }
// para[0].style.color = "red"
// para[1].style.color = "blue"
// para[2].style.color = "indigo"
// console.log(para)

// ****************************************** Events **************************************
// var logo = document.getElementById("logo")
// logo.addEventListener("click", function (){
//     // alert("You clicked me")
//     logo.style.backgroundColor = "red"
// })
var close = document.getElementById("close")
close.addEventListener("click", function(){
    var modal = document.getElementById("modal")
    modal.style.display = "none"
})

// function say(){
//     alert("You're Welcome")
// }

// function validate(){
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var subject = document.getElementById("subject")
//     var message = document.getElementById("message")
//     var error = document.getElementById("error")
//     console.log(name.value, email.value, subject.value, message.value)
//     if(name.value == ""){
//         error.innerHTML = "name cannot be empty!!"
//         return false
//     }else if(email.value == ""){
//         error.innerHTML = "email cannot be empty!!"
//         return false
//     }else if(email.value.includes("@") != true){
//         error.innerHTML = "email must include @!!"
//         return false
//     }else if(subject.value == ""){
//         error.innerHTML = "subject cannot be empty!!"
//         return false
//     }else if(message.value == ""){
//         error.innerHTML = "message cannot be empty!!"
//         return false
//     }
//     else {
//         return true
//     }
// }
// var person = "john"
// console.log(person.length)

// setInterval(function(){
//     console.log("Running....")
// }, 1000)

// var num = 10
// var timer = document.getElementById("timer")
// var interval = setInterval(function(){
//     num = num - 1
//     timer.innerHTML = num
//     if(num == 0){
//         clearInterval(interval)
//         timer.innerHTML = ""
//     }
// }, 1000)

// var min = document.getElementById("min")
// var sec = document.getElementById("sec")
// var min_value = 2
// var sec_value = 59
// min.innerHTML = min_value
// interval = setInterval(function(){
//     sec_value = sec_value - 1
//     sec.innerHTML = sec_value
//     if(min_value == 0 && sec_value == 0){
//         min.innerHTML = 0
//         sec.innerHTML = 0
//         clearInterval(interval)
//         return 0
//     }
//     if(sec_value == 0){
//         min_value = min_value - 1
//         min.innerHTML = min_value
//         sec_value = 60
//     }
// }, 100)

// var field = document.getElementById("field")
// var displayField = document.getElementById("display_field")
// var add = document.getElementById("add")

// add.addEventListener("click", function(){
//     // displayField.innerHTML = field.value
//     var h1 = document.createElement("h1")
//     h1.innerHtml = field.value
//     displayField.append(field.value)
//     field.value = ""
// })

modal = document.getElementById("modal")
setTimeout(() => {
    modal.style.display = "block"
    console.log("run")
}, 5000)

