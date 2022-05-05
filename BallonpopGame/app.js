// variable declaration total popped ballons, 

// const balloonArray = ['../BallonpopGame/blue.gif','../BallonpopGame/gray.gif','../BallonpopGame/green.png','../BallonpopGame/pink.gif'];
let scores = document.querySelectorAll('.score');

const divballon = document.createElement("div")
const ballonImg = document.createElement("img")
divballon.appendChild(ballonImg)


const divballoon=document.querySelectorAll(".balloon")

// const image = document.getElementsByClassName('ballon') 
const gameControls = document.querySelector(".gameControls")
gameControls.append(divballon)

const start_button = document.getElementById("myStr");
start_button.addEventListener("click", myFunction);

function myFunction(){
    console.log("disp");
for (let i=0; i<divballoon.length; i++){
    divballoon[i].classList.add("showballoon");
}

let pop_Balloon=0;

function deleteBalloon(elem){
    elem.remove();
    pop_Balloon++;
    scoreUpdate();
}
function scoreUpdate(){
    for (let i=0; i< scores.length; i++){
        scores[i].textContent = pop_Balloon;
    }
}

document.addEventListener('click',function(event){
    if(event.target.classList.contains('redBalloon')){
       deleteBalloon(event.target);
       console.log(pop_Balloon);
    }
})
}

var timeLeft = 30;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);


function countdown() {
    
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function doSomething(){
    window.alert("time is out");
}
    
// //divballoon.classList.remove("hidden") 
// console.log(divballoon);


// window.onload = () =>generateRandomBalloon(balloonArray);
// start_button.addEventListener("click", console.log('srart'));

// function generateRandomBalloon(array){
//     let randomNum = Math.floor(Math.random() * array.length);
//     image.setAttribute("src",array[randomNum]);
// }
// imgBalloon[0]=new Image();
// imgBalloon[0].src = '../BallonpopGame/pink.gif';

// imgBalloon[1]=new Image();
// imgBalloon[1].src = '../BallonpopGame/blue.gif';

// imgBalloon[2]=new Image();
// imgBalloon[2].src = '../BallonpopGame/gray.gif';

// imgBalloon[3]=new Image();
// imgBalloon[3].src = '../BallonpopGame/purple.gif';




// let balloon = ;
// let windowWidth = window.innerWidth;
// let body=document.body;
// let windowHeight = window.innerHeight;
// let scores = document.querySelectorAll('.score');
// let noPop = 0;
// let total = 20;
// let currentBalloons= 0;
// let gameOver = false;
// let popWindow = document.querySelector('.popWindow');
// // let start-Btn = document.querySelector('.startBtn');


// function flowBalloon(){
//     let div = document.createElement('div')
//     let rand = Math.floor(Math.random() * balloon.length);
//     div.className = 'balloon balloon-' + balloon[rand];
//     rand = Math.floor(Math.random()* (windowWidth - 20));
//     document.body.appendAChild(div)
// }








// ballon logic(planning to use random)

// timing for 30Secs

// display score and prompt for player to play whenever they are ready

// display both players score and who won!

// 

