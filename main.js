let xShape = document.querySelector(".xShape path");
let divforX = document.querySelector(".divforX");
let oShape = document.querySelector(".oShape path");
let divforY = document.querySelector(".divforY");
let turnOfX = 0;
let oTakesRound = document.querySelector(".oTakesRound");
let xTakesRound = document.querySelector(".xTakesRound");


divforX.addEventListener("click", function () {
    divforX.style.backgroundColor = "#A8BFC9";
    xShape.style.fill = "#1A2A33";
    divforY.style.backgroundColor = "#1A2A33";
    oShape.style.fill = "#A8BFC9";
    turnOfX++;
})

divforY.addEventListener("click", function () {
    divforX.style.backgroundColor = "#1A2A33";
    xShape.style.fill = "#A8BFC9";
    divforY.style.backgroundColor = "#A8BFC9";
    oShape.style.fill = "#1A2A33";
    turnOfX--;
})

secondPage = document.querySelector(".secondPage");
firstPage = document.querySelector(".firstPage");
newgamePlayer = document.querySelector(".newgamePlayer");
vsplayer = document.querySelector(".vsplayer");
forFirst = document.querySelector("#forFirst");
forSecond = document.querySelector("#forSecond");


vsplayer.addEventListener("click", function () {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    if (turnOfX == 1) {
        forFirst.innerHTML = "X (Player 1)"
        forSecond.innerHTML = "O (Player 2)"
    } else {
        forFirst.innerHTML = "X (Player 2)"
        forSecond.innerHTML = "O (Player 1)"
    }
})

let takesroundspanspan = document.querySelector("#takesroundspanspan");
let roundtied = document.querySelector("#roundtied");
let takesround = document.querySelectorAll(".takesround");
let clickDivs = document.querySelectorAll(".clickDivs");
let xturnimg = document.querySelector(".xturnimg");
let oturnimg = document.querySelector(".oturnimg");
let switchtries = 0;
let board = ['', '', '', '', '', '', '', '', ''];
let container = document.querySelector(".container");
let secondContainer = document.querySelector(".secondContainer");
let uperDiv = document.querySelector(".uperDiv");
let playBoardDiv = document.querySelector(".playBoardDiv");
let bottomDiv = document.querySelector(".bottomDiv");





function checkWinningCondition(array) {
    if ((array[0] == "X" && array[1] == "X" && array[2] == "X") || (array[3] == "X" && array[4] == "X" && array[5] == "X") || (array[6] == "X" && array[7] == "X" && array[8] == "X") || (array[0] == "X" && array[4] == "X" && array[8] == "X") || (array[2] == "X" && array[4] == "X" && array[6] == "X") || (array[0] == "X" && array[3] == "X" && array[6] == "X") || (array[1] == "X" && array[4] == "X" && array[7] == "X") || (array[2] == "X" && array[5] == "X" && array[8] == "X")) {
        takesround.forEach(element => element.style.display = "flex");
        xTakesRound.style.display = "block";
        oTakesRound.style.display = "none";
        container.style.backgroundColor = "#000000";
        secondContainer.style.backgroundColor = "#000000";
        uperDiv.style.backgroundColor = "#000000";
        uperDiv.style.opacity = "0.5";
        playBoardDiv.style.backgroundColor = "#000000";
        playBoardDiv.style.opacity = "0.5";
        bottomDiv.style.backgroundColor = "#000000";
        bottomDiv.style.opacity = "0.5";

       


    } else if ((array[0] == "O" && array[1] == "O" && array[2] == "O") || (array[3] == "O" && array[4] == "O" && array[5] == "O") || (array[6] == "O" && array[7] == "O" && array[8] == "O") || (array[0] == "O" && array[4] == "O" && array[8] == "O") || (array[2] == "O" && array[4] == "O" && array[6] == "O") || (array[0] == "O" && array[3] == "O" && array[6] == "O") || (array[1] == "O" && array[4] == "O" && array[7] == "O") || (array[2] == "O" && array[5] == "O" && array[8] == "O")) {
        takesround.forEach(element => element.style.display = "flex");
        oTakesRound.style.display = "block";
        xTakesRound.style.display = "none";
        container.style.backgroundColor = "#000000";
        secondContainer.style.backgroundColor = "#000000";
        uperDiv.style.backgroundColor = "#000000";
        uperDiv.style.opacity = "0.5";
        playBoardDiv.style.backgroundColor = "#000000";
        playBoardDiv.style.opacity = "0.5";
        bottomDiv.style.backgroundColor = "#000000";
        bottomDiv.style.opacity = "0.5";

     



    } else if (array.every(cell => cell != "")) {
        takesround.forEach(element => element.style.display = "flex");
        xTakesRound.style.display = "none";
        oTakesRound.style.display = "none";
        takesroundspanspan.style.display = "none";
        roundtied.style.display = "block";
        container.style.backgroundColor = "#000000";
        secondContainer.style.backgroundColor = "#000000";
        uperDiv.style.backgroundColor = "#000000";
        uperDiv.style.opacity = "0.5";
        playBoardDiv.style.backgroundColor = "#000000";
        playBoardDiv.style.opacity = "0.5";
        bottomDiv.style.backgroundColor = "#000000";
        bottomDiv.style.opacity = "0.5";

     
    }


}



clickDivs.forEach((div, index) => {
    div.addEventListener("click", function () {
        if (takesround[0].style.display === "flex") {
            return;
        }

        if (switchtries % 2 == 0) {
            if (board[index] == "") {
                xturnimg.style.display = "none";
                oturnimg.style.display = "block";
                let img = document.createElement('img');
                img.src = 'WhilePlayingX.png';
                div.appendChild(img);
                board[index] = "X";
                checkWinningCondition(board);
                switchtries++;
            }

        } else {
            if (board[index] == "") {
                oturnimg.style.display = "none";
                xturnimg.style.display = "block";
                let img2 = document.createElement('img');
                img2.src = 'WhilePlayingO.png';
                div.appendChild(img2);
                board[index] = "O";
                checkWinningCondition(board);
                switchtries++;
            }
        }

    })
});





