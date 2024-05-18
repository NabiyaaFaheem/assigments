import inquirer from "inquirer";
//computer will generate random number 
//user input for guessing number
//compare user input with computer genrate number
const randomNumber = Math.floor(Math.random() * 6 + 1);
//console.log(randomNumber)
const answer = await inquirer.prompt([{
name:"userguessnumber",
type:"number",
message:"please guess a number between 1 to 6"
}
])
if (answer.userguessnumber === randomNumber){
    console.log("congratulation you guessed it right")
}else{
    console.log("you guess wrong number")
}