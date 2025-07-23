console.log('Hello Player')
//La funcion de getRandomInt la saque de Google XD
//Da un numero entero random dependiendo del numero minimo y maximo como argumentos
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//checkea que la opcion sea valida!
function checkChoice(x){
        if (x == 'ROCK' || x == 'PAPER' || x == 'SCISSORS'){valido = true; return valido}   
        else {valido = false; return valido}
        }
//traduce el numero random que tuvo el bot a un resultado
function numberToChoice(x){
    if (x == 1)     {let z = 'ROCK'    ;return z}
    else if (x == 2){let z = 'PAPER'   ;return z}
    else if (x == 3){let z = 'SCISSORS';return z}
    }
// compara los resultados, aunque podria tener mejor logica. me gusta lo propio
// function winner(player, bot) {
//   if (player === bot) return 'no one';

//   const winsAgainst = {
//     ROCK: 'SCISSORS',
//     PAPER: 'ROCK',
//     SCISSORS: 'PAPER'
//   };

//   return winsAgainst[player] === bot ? 'You' : 'The bot';
// }

function winner(x,y){
    if (x == 'ROCK' && y == 'SCISSORS')    { return 'You'}
    if (x == 'ROCK' && y == 'PAPER')       { return 'The bot'}    
    if (x == 'ROCK' && y == 'ROCK')        { return 'no one'}       
    if (x == 'PAPER' && y == 'PAPER')      { return 'no one'}
    if (x == 'PAPER' && y == 'ROCK')       { return 'You'}
    if (x == 'PAPER' && y == 'SCISSORS')   { return 'The bot'}
    if (x == 'SCISSORS' && y == 'PAPER')   { return 'You'}
    if (x == 'SCISSORS' && y == 'ROCK')    { return 'The bot'}
    if (x == 'SCISSORS' && y == 'SCISSORS'){ return 'no one'}
}

var valido = false
var userChoice = ''
// mi idea: y como lo hice funcionar
// if (valido == false){
//     if (userChoice == ''){
//         userChoice = prompt('Please choose between Rock, Paper or Scissors');
//         userChoice = userChoice.toUpperCase();
//     }
//     checkChoice(userChoice);
// lo que quise hacer pero no me dio la cabeza:
while (valido == false) {
  userChoice = prompt('Choose Rock, Paper, or Scissors').toUpperCase();
  valido = checkChoice(userChoice);}
//uso de las variables descriptas arriba
var botPick = getRandomInt(1,3)
var botChoice = numberToChoice(botPick)
console.log('He choiced ' + botChoice)
var final = winner(userChoice,botChoice)
console.log(final + ' won')



