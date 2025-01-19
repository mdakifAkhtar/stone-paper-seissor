let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

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
        msg.style.transition="0.8s ease-in-out";
        userScore++;
        userScorepara.innerText=userScore;
        //console.log("you win!");
        //msg.style.transition="0.8s ease-in-out";
        msg.innerText = `You win🤘. ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else {
        //console.log("you lose");
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText = `You lost👊. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};


const playGame=(userChoice) => {
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
    })
})

