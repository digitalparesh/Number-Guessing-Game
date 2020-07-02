let arr = [];
// guess number
let randomNumber;
function random() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
random();
// count button click
let button = document.getElementById('submit');
let count = 0;
function clickCount() {
  count += 1;
}
let newBtn = document.getElementById('new');
newBtn.style.display = 'none';

// click event on submit button
document.getElementById('submit').addEventListener('click', function () {
  // get the user input
  let userInput = Number(document.getElementById('num').value);
  let msg = document.getElementById('msg');
  let colorMsg = document.getElementById('colorMsg');
  let preGuess = document.getElementById('preGuess');

  preGuess.style.display = 'block';
  colorMsg.style.display = 'block';
  newBtn.style.display = 'block';
  clickCount();

  arr.push(userInput);

  preGuess.textContent = 'Previous Guesses: ' + arr;

  if (count < 10) {
    if (userInput === randomNumber) {
      colorMsg.classList.remove('red');
      colorMsg.classList.add('green');
      colorMsg.textContent = 'Congratulations, You got it right..';
      msg.style.display = 'none';
      newGame();
    } else {
      if (userInput > randomNumber) {
        colorMsg.classList.remove('green');
        colorMsg.classList.add('red');
        colorMsg.textContent = 'Wrong!';
        msg.style.display = 'block';
        msg.textContent = 'Last guess was to high!';
        newBtn.style.display = 'none';
      } else {
        colorMsg.classList.remove('green');
        colorMsg.classList.add('red');
        colorMsg.textContent = 'Wrong!';
        msg.style.display = 'block';
        msg.textContent = 'Last guess was to low!';
        newBtn.style.display = 'none';
      }
    }
  } else {
    // game over start  the new game
    colorMsg.textContent = 'Game Over! You finished your 10 times turn.'
    newGame();
  }
  clearForm();
});
// start the new game
newBtn.addEventListener('click', function () {
  random();
  button.disabled = false;
  arr = [];
  count = 0;
  preGuess.style.display = 'none';
  colorMsg.style.display = 'none';
  newBtn.style.display = 'none';
})

function newGame() {
  button.disabled = true;
  newBtn.style.display = 'block';
}
function clearForm() {
  let input = document.getElementById('num');
  input.value = '';
}
