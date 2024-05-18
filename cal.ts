#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{message:"enter first number",type: "number",name: "firstNumber"},
{message:"enter your first number",type:"number",name:"firstNumber"},
{message:"enter your second number",type:"number",name:"secondNumber"},
{message:"select one of the operatrors to perform action",type:"list",name:"operator",choices:["addition","substraction","multiplication","division"]}

]);
//console.log(answer)


//CONDITIONAL STATMENTS
if (answer.operator === "addition"){
    console.log( answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("please select valid operators"); 
}