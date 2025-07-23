console.log('Hello Player')
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
var valido = false
var userChoice = ''

if (valido == false){
    if (userChoice == ''){
        userChoice = prompt('Please choose between Rock, Paper or Scissors');
        console.log(userChoice)
        userChoice = userChoice.toUpperCase();
        console.log(userChoice);
    }
    checkChoice(userChoice);
        }
if (valido == true){

}
