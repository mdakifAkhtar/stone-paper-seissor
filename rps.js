let userScore=0;
let compScore=0;
let attempt=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const attemptt=document.querySelector("#attempt");

const genCompchoice = () => {
    const option =["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return option[randIdx];
    // rock paper scissor;
}

const drawGame = () => {
    //console.log("Game Was Draw.");
    msg.innerText="GAME WAS DRAW,Play again😒";
    //msg.innerText = `You DRAW.${userChoice} BOTH ARE EQUAL ${compChoice}`;
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWinn,userChoice,compChoice) =>{
    if(userWinn){
        userScore++;
        userScorepara.innerText=userScore;
        //console.log("you win!");
        //msg.style.transition="0.8s ease-in-out";
        msg.innerText = `You win🤘. ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor ="rgb(17, 231, 17) ";

    }else {
        //console.log("you lose");
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText = `You lost👊. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="rgb(186, 44, 44";
    }
};


const playGame=(userChoice) => {
    attempt++;
    attemptt.innerText=attempt;
   // console.log("user choice =",userChoice);
    //generate computer choice;
    const compChoice =genCompchoice() ;
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
            //Draw Game
            drawGame();
    }
    else{
        let userWinn =true;
        if(userChoice ==="stone"){
            // scissors , paper;
            userWinn = compChoice === "paper" ? false : true;
        }
        else if (userChoice ==="paper"){
           //stone,scissors;
           userWinn = compChoice === "scissors"? false:true;
        }
        else{
            //stone,paper;
            userWinn =compChoice ==="stone"? false : true;
        }
        showWinner(userWinn,userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("Id");
      console.log("choice was clicked",userChoice);
      playGame(userChoice);
    });
});


document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("user-score").textContent = 0;
    document.getElementById("comp-score").textContent = 0;
    document.getElementById("attempt").textContent = 0;
    msg.textContent = "Hi! Mohammad🧑 Play your Move";
    msg.style.backgroundColor ="#081b31";
    userScore=0;
    compScore=0;
    attempt=0; 
});

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        animat.style.transition = 'transform 0.9s'; // Smooth animation
        animat.style.transform = 'rotateX(360deg)'; // Rotate 180 degrees
    });
});


/* const choices = ["stone", "paper", "scissors"];
const userScore = document.getElementById("user-score");
const compScore = document.getElementById("comp-score");
const attempt = document.getElementById("attempt");
const msg = document.getElementById("msg");

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const compChoice = choices[Math.floor(Math.random() * 3)];
        playRound(userChoice, compChoice);
    });
});

function playRound(user, comp) {
    attempt.textContent = parseInt(attempt.textContent) + 1;

    if (user === comp) {
        msg.textContent = `It's a tie! Both chose ${user}.`;
    } else if (
        (userChoice === "stone" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "stone") ||
        (userchoice === "scissors" && compChoice === "paper")
    ) {
        msg.textContent = `You win! ${user} beats ${comp}.`;
        userScore.textContent = parseInt(userScore.textContent) + 1;
    } else {
        msg.textContent = `You lose! ${comp} beats ${user}.`;
        compScore.textContent = parseInt(compScore.textContent) + 1;
    }
}
*/ 









