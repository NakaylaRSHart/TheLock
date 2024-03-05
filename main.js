/*
SECURE THE VAULT

1. Create string so user knows when vault is unlocked/locked
2. Use 3 numbers(variables) for lock code combination.(10-40-39).
3. Use different arithmetic operators to make the combination.
4. Display that in the Html File.

***Be SURE TO COMMENT STEPS IN CODE***
*/

//Creating alert to tell user to find the code-------
alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination");
// alert("10 40 39");

//Giving values to variables.
const raw1 = 40;
const raw2 = 1;
const raw3 = 4;

const combo1 = raw1/raw2
const combo2 = raw1*raw2
const combo3 = raw2-raw1

//Having the combo appear on HTML screen after clicking on the button.
function togglepopup() {
  let pupUpWords = document.getElementById(popUpWords);
  popUpWords.style.display = (popUpWords.style.display === 'none')
}