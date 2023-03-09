let xShape = document.querySelector(".xShape path");
let divforX = document.querySelector(".divforX");
let oShape = document.querySelector(".oShape path");
let divforY = document.querySelector(".divforY");


divforX.addEventListener("click", function () {
    divforX.style.backgroundColor = "#A8BFC9";
    xShape.style.fill = "#1A2A33";

    divforY.style.backgroundColor = "#1A2A33";
    oShape.style.fill = "#A8BFC9";


})

divforY.addEventListener("click", function () {
    divforX.style.backgroundColor = "#1A2A33";
    xShape.style.fill = "#A8BFC9";

    divforY.style.backgroundColor = "#A8BFC9";
    oShape.style.fill = "#1A2A33";


})