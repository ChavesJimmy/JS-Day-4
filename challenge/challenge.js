// create players
function printName(){

let name1 = document.getElementById("player1").value;
let name2 = document.getElementById("player2").value;

document.getElementById("p1").innerHTML = name1;
document.getElementById("p2").innerHTML = name2;

}
let start = document.getElementById("start");
start.onclick = printName;

// display score
let score1 = 0;
let score2 = 0;

document.getElementById("score1").innerHTML = `Score = ${score1}`
document.getElementById("score2").innerHTML = `Score = ${score2}`

// create Dice 1

function dice1(){    
     score1 += Number(Math.floor(Math.random()*6)+1);
    document.getElementById("score1").innerHTML = `Score = ${score1}`;

}

document.getElementById("dice1").addEventListener("click",dice1);

// create dice 2


function dice2(){    
    score2 += Number(Math.floor(Math.random()*6)+1);
   document.getElementById("score2").innerHTML = `Score = ${score2}`;

}

document.getElementById("dice2").addEventListener("click",dice2);

//Create turn

