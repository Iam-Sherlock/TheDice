var player1 = prompt("Enter Player 1 name")
var player2 = prompt("Enter Player 2 name")
document.querySelectorAll("p")[0].innerHTML = player1
document.querySelectorAll("p")[1].innerHTML = player2


var num1 = Math.floor(Math.random()*6 +1)
var num2 = Math.floor(Math.random()*6 +1)
var ran1 = "images/dice"+ num1 +".png";
var ran2 = "images/dice" + num2 +".png";

var randomVar1 = document.querySelectorAll("img")[0].setAttribute("src",ran1);
var randomVar2 = document.querySelectorAll("img")[1].setAttribute("src",ran2);
console.log(ran1 ,ran2 )

if (num1 > num2){
    document.querySelector("h1").innerHTML = player1 + "Laughs 😂";
}
else if(num1 < num2){
    document.querySelector("h1").innerHTML = player2 + "Laughs 😂";
}
else{
    document.querySelector("h1").innerHTML = "Both are Unlucky"
}