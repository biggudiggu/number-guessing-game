// number guessing game

const labelhead = document.getElementById("labelhead");
const guessLabel = document.getElementById("guessLabel");
const inputBox = document.getElementById("inputBox");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

guessLabel.textContent = `Guess a number between ${minNum} - ${maxNum}:`

function checkGuess(){

    let value = parseInt(inputBox.value);
   
    if(isNaN(value) || value < minNum || value > maxNum) {
      guessLabel.textContent = "please enter a valid number"
    }
    else{
      attempts++;
      if(value < answer){
        guessLabel.textContent = `${value} IS TOO LOW! TRY AGAIN!`;
      }
      else if(value > answer){
        guessLabel.textContent = `${value} IS TOO HIGH! TRY AGAIN!`;
      }
      else{
        guessLabel.textContent = `CORRECT!! THE ANSWER IS ${answer}. YOU NEEDED ${attempts} ATTEMPTS`;
        inputBox.disabled = true;
        submitBtn.onclick = function(){
          window.location.reload();
        }
      }
    }
    inputBox.value = "";
    inputBox.placeholder = "";
  }

  resetBtn.onclick = function(){
    window.location.reload();
  }

  submitBtn.addEventListener("click", checkGuess);

  inputBox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      checkGuess();
    }
  });



// with prompt
/*
let guess;
let running = true;

while(running){
  guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`)
  guess = Number(guess);

  if(isNaN(guess)){
    window.alert("please enter a valid number!")
  }
  else if(guess < minNum || guess > maxNum){
    window.alert("please enter a valid number!")
  }
  else{
    attempts++;
    if(guess < answer){
      window.alert("TOO LOW! TRY AGAIN!! ")
    }
    else if(guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN")
    }
    else{
      window.alert(`CORRECT!! THE ANSWER IST ${answer}. YOU NEEDED ${attempts} ATTEMPTS`)
      running = false;
    }
  }
}*/
