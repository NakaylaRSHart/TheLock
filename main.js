/*
SECURE THE VAULT

1. Create string so user knows when vault is unlocked/locked
2. Use 3 numbers(variables) for lock code combination.(10-40-39).
3. Created Diablog box displaying the vault code.
4. Create a pop up at the start that says "Find the code!"

***Be SURE TO COMMENT STEPS IN CODE***
*/

//Creating alert to tell user to find the code-------
alert("Find the Code!");

//Setting combination--------------------------------
const correctCombo = [10 , 40, 39]
const number1 = 10;
const number2 = 40;
const number3 = 39;

//Funciton to get combination------------------------
function checkCombo(){
  // Get the entered combination
const number1 = document.number1('number1');
const number2 = document.number2('number2');
const number3 = document.number3('number3');
}
 
//Checking if combination is correct; if it is show unlocked, else show still locked.

if(userAnswer.number1 === correctCombo[0] && number2 === correctCombo[1] && number3 === correctCombo[2]){
  alert =("result") ('Unlocked!!');
}
else{
  alert =("result")('Incorrect!! Try Again!');
}