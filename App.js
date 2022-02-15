const inputBar = document.querySelector('.numberInput');
const inputButton = document.querySelector('.btnInput');
const infoP = document.querySelector('.infoP');
const arrowdown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');
const tick = document.querySelector('.tick');
const againButton = document.querySelector('.againBtn');
const questionMark = document.querySelector('.question-mark');
const scoreUser = document.querySelector('.scoreUser');

let randomNumber = Math.floor(Math.random() * 100);
let userScore = 20;
let highScore = 0;

const checkFunc = () => {
  if (
    !Number(inputBar.value) ||
    Number(inputBar.value) < 0 ||
    Number(inputBar.value > 100)
  )
    infoP.innerText = 'Please type number between 1-100';
  if (Number(inputBar.value) && inputBar.value >= 0 && inputBar.value < 100) {
    if (+inputBar.value > randomNumber) {
      infoP.innerText = 'Type lower number';
      arrowdown.style.display = 'block';
      arrowUp.style.display = 'none';
      tick.style.display = 'none';
      questionMark.style.display = 'none';
      userScore--;
    }
    if (+inputBar.value < randomNumber) {
      infoP.innerText = 'Type higher number';
      arrowdown.style.display = 'none';
      arrowUp.style.display = 'block';
      tick.style.display = 'none';
      questionMark.style.display = 'none';
      userScore--;
    }
    if (+inputBar.value > 100 || +inputBar.value <= 0) {
      infoP.innerText = 'Please type number between 1-100';
    }
    if (+inputBar.value == randomNumber) {
      infoP.innerText = 'Well Done!! You Find the Number';
      arrowdown.style.display = 'none';
      arrowUp.style.display = 'none';
      tick.style.display = 'block';
      questionMark.style.display = 'none';
      userScore == 0;
      inputButton.disabled = true;
      if (userScore >= highScore) highScore == userScore;
    }
    scoreUser.innerText = `Your score is ${userScore}`;
    if (userScore == 0) {
      userScore == 0;
      inputButton.disabled = true;
      infoP.innerText = 'Try again';
    }
  }
};

const againFunc = () => {
  inputBar.value = '';
  inputButton.disabled = false;
  userScore = 20;
  scoreUser.innerText = `Your score is ${userScore}`;
  arrowdown.style.display = 'none';
  arrowUp.style.display = 'none';
  tick.style.display = 'none';
  questionMark.style.display = 'block';
  randomNumber = Math.floor(Math.random() * 100);
};

inputButton.addEventListener('click', () => {
  inputBar.focus();
  checkFunc();
  inputBar.value = '';
});

againButton.addEventListener('click', () => {
  againFunc();
});

inputBar.addEventListener('keypress', function (event) {
  if (event.keyCode == 13) inputButton.click();
});
againFunc();
