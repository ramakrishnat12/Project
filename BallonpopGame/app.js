// variable declaration total popped ballons, 

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let pop_Balloon=0;
let playerOne = 0;
let playerTwo = 0;
let scores = document.querySelectorAll('.score');
var player1result;
var player2result;

const divballon = document.createElement("div")
const ballonImg = document.createElement("img")
divballon.appendChild(ballonImg)


const divballoon=document.querySelectorAll(".balloon")

const image = document.getElementsByClassName('ballon') 
const gameControls = document.querySelector(".gameControls")
gameControls.append(divballon)

const start_button = document.getElementById("myStr");
start_button.addEventListener("click", myFunction);

function myFunction(){
    // console.log("disp");

for (let i=0; i<divballoon.length; i++){

    divballoon[i].classList.add("showballoon");
}

}

// ----------------Score and remove balloon logic----------------

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
    //    console.log(pop_Balloon);
    }
})


// ----------------Timmer-------------------

document.getElementById('myStr').addEventListener("click", function(){

    var timeleft = 10;

    var downloadTimer = setInterval(function function1(){
        document.getElementById("some_div").innerHTML = timeleft + " "+"seconds remaining";

        timeleft -= 1;
        if(timeleft<=0){
            clearInterval(downloadTimer);
            document.getElementById("some_div").innerHTML = "Time is up"
            playerOne = Number(document.querySelector('.score').textContent)

            let pla1= document.getElementById('playerOneScore').innerHTML;
            let pla2 = document.getElementById('twoScore').innerHTML;

            
           

            if (p1.classList.contains('current-player')){
                p1.classList.remove('current-player');
                p2.classList.add('current-player');
                let pla1 = playerOne;
                document.getElementById('playerOneScore').innerHTML = playerOne;
                document.getElementById('demo').innerHTML = "Player Two Click on Start to Play"
                player1result= Number(pop_Balloon);
                // console.log(player1result);
                pop_Balloon=0;
                
                

            }else {
                p2.classList.remove('current-player');
                p1.classList.add('current-player');
                document.getElementById('twoScore').innerHTML = playerOne;
                player2result= Number(pop_Balloon);
                // console.log(player2result);

            }
            
                
        }
        
///////////////Players score comparision///////////////////////////

        if (player1result>player2result){
            console.log("player1 wins");
            document.getElementById('demo').innerHTML = "Player One won the game!<br> <br>What do you want to do?"
        }
        else{
            if (player2result>player1result){
                document.getElementById('demo').innerHTML = "Player Two won the game!<br> <br>What do you want to do?"
                console.log("player2 wins")
            }
            else{
                if (player1result==player2result){console.log("Tie")}
            }
            
        }
        
        },1000);
   
    
    });
  

    // document.getElementsByClassName('reStart').addEventListener("click", switchPlayer());

    // function switchPlayer(){
    //     if (p1.classList.contains('current-player')){
    //         p1.classList.remove('current-player');
    //         p2.classList.add('current-player');
    //     }else {
    //         p2.classList.remove('current-player');
    //         p1.classList.add('current-player');
    //     }
    // }
    






    
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

// // const balloonArray = ['../BallonpopGame/blue.gif','../BallonpopGame/gray.gif','../BallonpopGame/green.png','../BallonpopGame/pink.gif'];

