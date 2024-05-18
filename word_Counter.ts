import inquirer from "inquirer";
//Declare a constant ' answer ' and assign it to the result  of the inquirer prompt function
const answers:{
    sentence:string
}= await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"enter your sentence to count the words"
    }
])
const words = answers.sentence.trim().split(" ")
//print the array of the word to the console
console.log(words)
//print the word count of the sentence to  the console
console.log(`your sentence word count is ${words.length}`)