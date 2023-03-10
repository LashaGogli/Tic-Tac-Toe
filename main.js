let xShape = document.querySelector(".xShape path");
let divforX = document.querySelector(".divforX");
let oShape = document.querySelector(".oShape path");
let divforY = document.querySelector(".divforY");
let turnOfX = 0;


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
forFirst = document.querySelector("#forFirst");
forSecond = document.querySelector("#forSecond");


newgamePlayer.addEventListener("click", function () {
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

let clickDivs = document.querySelectorAll(".clickDivs");
let xturnimg = document.querySelector(".xturnimg");
let oturnimg = document.querySelector(".oturnimg");
let switchtries = 0;
let board = ['', '', '', '', '', '', '', '', ''];

function checkWinningCondition(array) {
    if ((array[0] == "X" && array[1] == "X" && array[2] == "X") || (array[3] == "X" && array[4] == "X" && array[5] == "X") || (array[6] == "X" && array[7] == "X" && array[8] == "X") || (array[0] == "X" && array[4] == "X" && array[8] == "X") || (array[2] == "X" && array[4] == "X" && array[6] == "X")) {
        console.log("X Won");
    } else if ((array[0] == "O" && array[1] == "O" && array[2] == "O") || (array[3] == "O" && array[4] == "O" && array[5] == "O") || (array[6] == "O" && array[7] == "O" && array[8] == "O") || (array[0] == "O" && array[4] == "O" && array[8] == "O") || (array[2] == "O" && array[4] == "O" && array[6] == "O")) {
        console.log("O Won");
    }

}

clickDivs.forEach((div, index) => {
    div.addEventListener("click", function () {

        if (switchtries % 2 == 0) {
            if (board[index] == "") {
                xturnimg.style.display = "none";
                oturnimg.style.display = "block";
                let img = document.createElement('img');
                img.src = 'WhilePlayingX.png';
                div.appendChild(img);
                board[index] = "X";
                checkWinningCondition(board);
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
            }
        }
        switchtries++;



    })
});

