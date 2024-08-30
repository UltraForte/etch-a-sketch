function setGrid() {
    for (i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    //
    square.style.opacity = 0;

    const mainContainer = document.querySelector(".container");
    mainContainer.appendChild(square);
    };
};

for (a = 0; a < 16; a++) {
    setGrid();
};

const mainContainer = document.querySelector(".container");
mainContainer.style.width = "730px";

//This is another way to to the "hover" effect work:
//mainContainer.addEventListener("mouseover", (event) => {
//    event.target.style.backgroundColor = "black";
//});

function askSize() {
    let userNewSize = prompt("Enter the number of squares you would like for each side:");
    if (!isNaN(userNewSize) && userNewSize <= 100) {
        return userNewSize;
    } else if (isNaN(userNewSize)) {
        alert("Only number are accepted");
        askSize();
    } else if (userNewSize > 100) {
        alert("Maximum grid size is: 100");
        askSize();
    };
};

let allSquares = mainContainer.querySelectorAll(".square");
function removeSquares(allSquares) {
    allSquares.remove();
};
function randomRGB() {
    function randomNum() {
        let number = Math.round(Math.random() * 256);
        return number;
    };
    let randomColor = "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
    return randomColor;
};

function hoverEffect(allSquares) {
    allSquares.addEventListener("mouseover", () => {
        if (isBlackOnlyActive && isFullOpacityActive) {
            allSquares.style.backgroundColor = "black";
            allSquares.style.opacity = 1;
        } else if (isBlackOnlyActive && !isFullOpacityActive) {
            allSquares.style.backgroundColor = "black";
            let currentOpacity = parseFloat(allSquares.style.opacity);
                if (currentOpacity <= 1) {
                    allSquares.style.opacity = currentOpacity + 0.1;
                };
        } else if (!isBlackOnlyActive && isFullOpacityActive) {
            allSquares.style.backgroundColor = randomRGB();
            allSquares.style.opacity = 1;
        } else if (!isBlackOnlyActive && !isFullOpacityActive) {
            allSquares.style.backgroundColor = randomRGB();
            let currentOpacity = parseFloat(allSquares.style.opacity);
                if (currentOpacity <= 1) {
                    allSquares.style.opacity = currentOpacity + 0.1;
                };
        };
    });
};
allSquares.forEach(hoverEffect);


const changeSizeBtn = document.querySelector("#changeSizeBtn");
changeSizeBtn.addEventListener("click", () => {
    newSize = askSize();
    allSquares.forEach(removeSquares);

    function setNewGrid() {
        for (b = 0; b < newSize; b++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        function findSquareSize() {
            let squareSize = (730/newSize)
            return squareSize;
        };
        squareSize = findSquareSize() + "px";
        square.style.width = squareSize;

        square.style.opacity = 0;

        const mainContainer = document.querySelector(".container");
        mainContainer.appendChild(square);
        };
    };
    for (c = 0; c < newSize; c++) {
        setNewGrid();
    };
    allSquares = mainContainer.querySelectorAll(".square");
    allSquares.forEach(hoverEffect);
});


//Extra Features Practice//
const blackOnlyBtn = document.getElementById("black-only");
const fullOpacityBtn = document.getElementById("full-opacity");

let isBlackOnlyActive = true;
blackOnlyBtn.addEventListener("click", function() {
    isBlackOnlyActive = !isBlackOnlyActive;
    if (isBlackOnlyActive) {
        blackOnlyBtn.style.backgroundColor = "green";
        blackOnlyBtn.textContent = "On";
    } else {
        blackOnlyBtn.style.backgroundColor = "red";
        blackOnlyBtn.textContent = "Off";
    };
});

let isFullOpacityActive = true;
fullOpacityBtn.addEventListener("click", () => {
    isFullOpacityActive = !isFullOpacityActive;
    if (isFullOpacityActive) {
        fullOpacityBtn.style.backgroundColor = "green";
        fullOpacityBtn.textContent = "On";
    } else {
        fullOpacityBtn.style.backgroundColor = "red";
        fullOpacityBtn.textContent = "Off";
    };
});