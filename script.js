'use strict';
//class is dot ID is hastag (how to select HTML tag)

/*console.log(document.querySelector('.message')
.textContent);
document.querySelector('.message').textContent = 
'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
 document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click' , function () {
    const guess = Number(document.querySelector('.guess').
    value);


 //NO INPUT
 if (!guess) {
    displayMessage('No Number Given');
    //CORRECT ANSWER
 }else if (guess === secretNumber){
    displayMessage('Corecto')
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = 
    '#60b347';
    document.querySelector('.number').style.width = '30rem';

 }if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    //WRONG GUESS
 }else if (guess !== secretNumber) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
    }else {
        displayMessage('YOU ARE THE LOOSER!');
        document.querySelector('.score').textContent = 0;
    }
 }
})

document.querySelector('.again').addEventListener('click' , function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});