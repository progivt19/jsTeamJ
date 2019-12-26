var computerGuess;
var userGuesslog = [];
var attempts = 0;
var maxGuesses = 10;
var audio1 = new Audio();
var audio2 = new Audio();
audio1.src = "mus/winmus.mp3";
audio2.src = "mus/losemus.mp3";           

function gameEnded() {
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('easyBtn').style.display = 'none';
    document.getElementById('hardBtn').style.display = 'none';
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function easyMode() {
    maxGuesses = 10;
    document.getElementById('easyBtn').className = 'activeButton';
    document.getElementById('hardBtn').className = '';
}
function hardMode(){
    maxGuesses = 5;
    document.getElementById('hardBtn').className = 'activeButton';
    document.getElementById('easyBtn').className = '';
}


function newGame(){
  
    
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    //console.log(computerGuess);
    document.getElementById('newGameButton').style.display = 'none';
}
function compareGuess() {
    var userGuess = " " + document.getElementById('inputBox').value;
    //console.log(userGuess);
    
    userGuesslog.push(userGuess);
    //console.log(userGuesslog);
    document.getElementById('guessLog').innerHTML = userGuesslog;
    
    attempts++;
    document.getElementById('attempts').innerHTML = attempts;

if(userGuesslog.length < maxGuesses) {
    if(userGuess > computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Вы ввели число больше чем нужно';
        document.getElementById('inputBox').value = "";
    } else if (userGuess < computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Вы ввели число меньше чем нужно';
        document.getElementById('inputBox').value = "";
    } else {
        document.getElementById('textOutput').innerHTML = 'Вы угадали число! Вы смогли отгодать число за ' +attempts+ ' попыток';
        document.getElementById('container').style.backgroundColor = 'green';
        audio1.play();
        gameEnded();
    }
} else {
    if(userGuess > computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Вы проиграли!!!' +'<br> правильный ответ: ' +computerGuess;
        document.getElementById('container').style.backgroundColor = 'red';
        audio2.play();
        gameEnded();
    }else if (userGuess < computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Вы проиграли!!!' +'<br> правильный ответ: ' +computerGuess;
        document.getElementById('container').style.backgroundColor = 'red';
        audio2.play();
        gameEnded();
    }else {
        document.getElementById('textOutput').innerHTML = 'Вы угадали число! Вы смогли отгодать число за ' +attempts+ ' попыток';
        document.getElementById('container').style.backgroundColor = 'green';
        audio1.play();
        gameEnded();
    }
}  
}