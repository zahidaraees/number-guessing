#! /user/bin/env  node
//Number Guessing Applicaiton  
import inquirer from "inquirer";
let roundNumber = Math.floor(Math.random() * 4 + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "guessNumber",
    message: "Guess a Number between 1 to 4 :",
});
if (userInput.guessNumber === roundNumber) {
    console.log("Congratulations! you have guessed correctly!");
}
else {
    console.log(`Sorry! your answer is wrong, plz try again because at this time correct ans is: ${roundNumber}`);
}
