function increment(){
    let number = document.getElementById("count-el").innerText
    document.getElementById("count-el").innerText = ++number
}
function reset(){
    document.getElementById("count-el").innerText = "0"
}
let a = 3
let b = 4
console.log(Math.sqrt(a*a+b*b))

// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   console.log("Hello " + person + "! How are you today?");
// }

let c = prompt("Enter a:","2");
let d = prompt("Enter b:","3");
console.log(Math.sqrt(c*c+d*d));