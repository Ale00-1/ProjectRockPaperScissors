console.log('Hello Player')
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInteger = getRandomInt(1, 10); // Generates a random integer between 1 and 10 (inclusive)
console.log(randomInteger);
function checkChoice(x){
         if (x == 'ROCK' || x == 'PAPER' || x == 'SCISSORS'){
            console.log('bueno')
            valido = true;
            return valido
            }   
            else {
                console.log('mal')
                valido = false;
                return valido
            }
        }
function numberToChoice(x){
    if (x == 1){
        botChoice = 'ROCK'
        return botChoice
    if (x == 2){
        botChoice = 'PAPER'
        return botChoice
    if (x == 3){
        botChoice = 'SCISSORS'
        return botChoice
    }
    }
    }
}

var valido = false
var userChoice = ''

if (valido == false){
    if (userChoice == ''){
        userChoice = prompt('Please choose between Rock, Paper or Scissors');
        userChoice = userChoice.toUpperCase();
    }
    checkChoice(userChoice);
        }

var botPick = getRandomInt(1,3)
numberToChoice(botPick)

