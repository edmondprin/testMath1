//const prompt = require('prompt-sync')({ sigint: true }); 

/*
function getRandom(min, max) {
  const floatRandom = Math.random() // 0.25

  const difference = max - min // 4

  // random between 0 and the difference
  const random = Math.round(difference * floatRandom) // 1

  const randomWithinRange = random + min // 2

  return randomWithinRange
}

console.log(getRandom(0, 20));
*/

const yourName = prompt("Hello there, what is your name? ");

const sub1 = document.getElementById('sub1');
sub1.textContent = Math.floor(Math.random() * 50) + 35;
//sub1 = Number(sub1);
//console.log("Sub1: ", typeof Number(sub1))
//console.log("Sub1: ", Number(sub1));
const sub2 = document.getElementById('sub2');
sub2.textContent = Math.floor(Math.random() * (32 - 1) ) + 2;
//sub2 = Number(sub2);

const but1 = document.getElementById("revealDate");
but1.addEventListener("click", showDate);
function showDate() {
  let dat = document.createElement("p");
  dat.innerText = new Date();
  let int = document.getElementById("intro");
  int.appendChild(dat);
}

const add1 = document.getElementById('add1');
add1.textContent = Math.floor(Math.random() * 50) + 35;
const add2 = document.getElementById('add2');
add2.textContent = Math.floor(Math.random() * (32 - 1) ) + 2;

const mult1 = document.getElementById('mult1');
mult1.textContent = Math.floor(Math.random() * 10) + 2;
const mult2 = document.getElementById('mult2');
mult2.textContent = Math.floor(Math.random() * 4) + 2;

let points = 0;
let pointSub = 0;
let pointAdd = 0;
let pointMult = 0;

var Improv = [];

const but2 = document.getElementById("submit");
but2.addEventListener("click", result);
function result() {
  let result1 = document.getElementById("sub");
  let result2 = document.getElementById("add");
  let result3 = document.getElementById("mult");
  let yourResult1 = parseInt(result1.value);
  let yourResult2 = parseInt(result2.value);
  let yourResult3 = parseInt(result3.value);
  let res1 = Number(sub1.textContent) - Number(sub2.textContent)
  let res2 = Number(add1.textContent) + Number(add2.textContent)
  let res3 = Number(mult1.textContent) * Number(mult2.textContent)



  if (yourResult1 == (res1)) {
    points += 1;
    pointSub = 1;
    console.log("Great");
  } else {
    points += 0;
    pointSub = 0;
    Improv.push("subtraction")
    console.log("Bad");
  }
  if (yourResult2 == (res2)) {
    points += 1;
    pointAdd = 1;
    console.log("Great");
  } else {
    points += 0;
    pointAdd = 0;
    console.log("Bad");
    Improv.push("addition");
  }
  if (yourResult3 == (res3)) {
    points += 1;
    pointMult = 1;
    console.log("Great");
  } else {
    points += 0;
    pointMult = 0;
    Improv.push("multiplication");
    console.log("Bad");
  }
  

  //console.log("Your answer to question 1: ", yourResult1);
  //console.log("Your answer to question 2: ", yourResult2);
  //console.log("Your answer to question 3: ", yourResult3);
  //console.log(`Your points today: ${points}`);
  hideStuff();
  showResult();
}

function hideStuff() {
  document.getElementById("before").classList.add("hide");
}

function showResult() {
  let para = document.createElement("p");
  para.classList.add("para");
  let text = `Congrats ${yourName}, you have a total of ${points} point(s) today out of 3! Fantastic work!
  Here is the detail of your points:
  Subtraction: ${pointSub}
  Addition: ${pointAdd}
  Multiplication: ${pointMult}
  The areas where you should focus, if any: ${Improv}`;
  para.innerText = text;
  document.body.appendChild(para);
}

/*
let yourScore = 0;
let start = Math.round(Math.random() * 50);
let finish = Math.round(Math.random() * start)

let yourAnswer = Number(prompt(`EXERCICE 1: A store has ${start} bottles of Coca-Cola in the morning, and has only ${finish} in stock when it is time to close.
Can you write how many bottles were sold that day? `))

if (yourAnswer === start - finish) {
  console.log("Good answer! You are so amazing! \n")
  yourScore ++;
} else {
  console.log("You could better than this \n")
}

let listNames = ["Maia", "Mateo", "Lia", "Amador", "Stephanie", "Rocky"]

let boy = Math.round(Math.random() * 50);
let girl = Math.round(Math.random() * 50)

let yourAnswer2 = Number(prompt(`EXERCICE 2: Mateo has ${boy} toys, and Maia has ${girl} toys.
Can you write the total number of toys in our house? `))

if (yourAnswer2 === boy + girl) {
  console.log("Good answer! You are so amazing!");
  yourScore ++;
} else {
  console.log("You could better than this")
}

function showScore() {
  if (showScore < 2) {
    console.log(`You earned a total of ${yourScore} point!`);
  } else {
    console.log(`You earned a total of ${yourScore} points!`);
  }
}

showScore();
console.log(yourScore < 2);
*/