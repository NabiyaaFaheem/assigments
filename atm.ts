import inquirer from "inquirer";
let mybalance = 10000;//dollar
let mypin = 1516;

const pinAnswer = await inquirer.prompt(
    {
        name:"pin",
        message:"enter your pin",
        type:"number"
    }
//square brackets is use for multiple question we are asking only one right now that why we were not using square brackets
);
//console.log(pinAnswer.q1);
if(pinAnswer.pin === mypin){
    console.log("correct pin code!!")
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw","checkbalance"]
            }
        ]
    )
console.log(operationAns)
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([{
            name:"amount",
            message:"enter your amount",
            type:"number"
        }])
       // console.log(amountAns.amount);
       mybalance -= amountAns.amount
       console.log("your remaining balance is"+ mybalance)
    }else if(operationAns.operation === "checkbalance"){
        console.log("remaining balance is "+ mybalance)
    }
}
else{
    console.log("incorrect pin number")
}