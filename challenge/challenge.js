// create players
function printName(){

let name1 = document.getElementById("player1").value;
let name2 = document.getElementById("player2").value;

document.getElementById("p1").innerHTML = `Player 1 : ${name1}`;
document.getElementById("p2").innerHTML = `Player 2 : ${name2}`;

}
let start = document.getElementById("start");
start.onclick = printName;

// display score
let score1 = 0;
let score2 = 0;
let maxScore = 21;


document.getElementById("score1").innerHTML = `Score = ${score1}`
document.getElementById("score2").innerHTML = `Score = ${score2}`

// create Dice 1
function dice1(){    
     score1 += (Math.floor(Math.random()*6)+1);
    document.getElementById("score1").innerHTML = `Score = ${score1}`;

    if(score1 >= maxScore){
        let result = document.getElementById("score1")
        result.innerHTML = `Player 1 WIN !!!!`
        document.getElementById("score2").innerHTML = `You lose!!`

    }
}

document.getElementById("dice1").addEventListener("click",dice1);

// create dice 2


function dice2(){    
    score2 += (Math.floor(Math.random()*6)+1);
   document.getElementById("score2").innerHTML = `Score = ${score2}`;

   if(score2 >= maxScore){
        document.getElementById("score2").innerHTML = `You WIN !!!!`
        document.getElementById("score1").innerHTML = `You lose!`
    }
}

document.getElementById("dice2").addEventListener("click",dice2);

//Create turn
const btn = document.getElementById("dice1");
btn.addEventListener("click", function onclick(){
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("Turn").innerHTML = "2nd player turn!";
})

const btn2 = document.getElementById("dice2");
btn2.addEventListener("click", function onclick(){
    document.body.style.backgroundColor = "lightpink";
    document.getElementById("Turn").innerHTML = "1st player turn!";
})

   
    
