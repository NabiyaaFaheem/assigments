import inquirer from "inquirer";
let todos = []
let condition = true;
while(condition)
{
let todosQuestion = await inquirer.prompt([
    {
        name:"firstquestion",
        type:"input",
        message:"what would you like to add in your todos"
    },
    {
        name:"secondquestion",
        type:"confirm",
        message:"would you like to add more in your todos",
        default:"true"
    }
]
);
todos.push(todosQuestion.firstquestion);
console.log(todos)
condition = todosQuestion.secondquestion
}