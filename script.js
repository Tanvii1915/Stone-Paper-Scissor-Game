let userscore = 0;
let computerscore = 0;



const images = document.querySelectorAll(".image");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const computerPara = document.querySelector("#computer-score");

const gencomputerimage = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3) ;
    return options[ranIdx];
    //rock,paper,scissors
};

const drawGame = () => {
    // console.log("game was draw. ");
    msg.innerText = "Game was draw . paly again !";
    msg.style.backgroundColor = "black";

};

const showWinner = (userWin, userimage, computerimage) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `you Win !your ${userimage} beats ${computerimage}`;
        message.style.backgroundColor = "green";
    } else {
        computerscore++;
        computerPara.innerText = computerscore;
        // console.log("you lose");
        msg.innerText = `you lose. ${computerimage} beats your ${userimage}`;
        message.style.backgroundColor = "red";  

    }
};

const playGame = (userimage) => {
    console.log("user image = ", userimage);
    //generate computer image modular ;
    const computerimage = gencomputerimage();
    console.log("computer image = ", computerimage);

    if(userimage === computerimage) {
      drawGame();
    } else {
        let userWin = true;
        if(userimage === "rock") {

            userWin = computerimage === "paper" ? false : true;

        } else if(userimage === "paper") {
            userWin = computerimage === "scissor" ? false : true;
        } else {
            computerimage === "rock" ? false : true;
        }

        showWinner(userWin, computerimage);
    }
};

images.forEach((image) => {
    // console.log(image);
    image.addEventListener("click", () => {
        const userimage = image.getAttribute("id");
        playGame(userimage);

        // console.log("images was clicked", userimage);

    });
}
);