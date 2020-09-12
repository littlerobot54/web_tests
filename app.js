// --       Variables and Constants     --
var declaration = getComputedStyle(document.documentElement)
var defaultColor = declaration.getPropertyValue('--global-color');

var correctColor = '';
var pressedSquares = [];


// --       Selectors       --
// General
const header = document.querySelector('header')

// Header
const rgbCode = document.querySelector('.rgbCode');

// Status bar
const newColorsaBtn = document.querySelector('.statusBar-btn');
const resultText = document.querySelector('.statusBar-result')
const easyBtn = document.querySelector('#easy-btn');
const hardBtn = document.querySelector('#hard-btn');

// Squares
const squares = document.querySelectorAll('.square');


// --       Event Listeners       --
// Start
document.addEventListener('DOMContentLoaded', newColor)

// Dificulty
easyBtn.addEventListener('click', dificultyBtn);
hardBtn.addEventListener('click', dificultyBtn);

// Square colors
newColorsaBtn.addEventListener('click', newColor);
for (i=0; i<squares.length; i++) {
    squares[i].addEventListener('click', squarePressed);
}


// --       Functions       --
function dificultyBtn(e) {
        switch (e.target.id) {
            case 'easy-btn':
                easyBtn.classList.add('statusBar-btn-pressed');
                hardBtn.classList.remove('statusBar-btn-pressed');
                
                for (i=3; i<6; i++){
                    squares[i].style.display = 'none';
                }
                newColor();
                break;
            case 'hard-btn':
                hardBtn.classList.add('statusBar-btn-pressed');
                easyBtn.classList.remove('statusBar-btn-pressed');
                for (i=3; i<6; i++){
                    squares[i].style.display = '';
                }
                newColor();
                break;
            default:
                break;
        }
}

function newColor(e) {
    // Change color of header
    header.style.backgroundColor = defaultColor;

    // Add random colors to squares
    for (i=0; i < squares.length; i++){
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        squares[i].style.backgroundColor = randomColor;
    }
    // Get all active squares
    let activeSquare = 0;
    for(i=0; i<squares.length; i++) {
        if (squares[i].style.display === '') {
            activeSquare += 1;
        }
    }
    // Choose random square color to be the correct
    let randomSquareNum = Math.floor(Math.random()*activeSquare);
    correctColor = squares[randomSquareNum].style.backgroundColor;
    // Show the color code to be guessed
    rgbCode.innerText = correctColor.toUpperCase();
}

function squarePressed(e) {
    pressedColor = e.target.style.backgroundColor;
    if (pressedColor === correctColor) {
        // Show hidden squares
        for (i=0; i<pressedSquares.length; i++) {
            pressedSquares[i].style.display = '';
        }
        // Show correct
        resultText.innerText = 'CORRECT';
        for(i=0; i<squares.length; i++) {
            squares[i].style.backgroundColor = correctColor;
        }
        header.style.backgroundColor = correctColor;
    } else {
        // Hide square and add it to hidden list
        pressedSquares.push(e.target);
        e.target.style.display = 'none';
        // Show try afain
        resultText.innerText = 'TRY AGAIN';
    }
}