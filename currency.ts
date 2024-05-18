import inquirer from "inquirer";
//make a condition variable for running while loop
let condition = true;
//making converter currencies
while (condition){
    let converter = {
        "USD":{
            "PKR":277,
            "GDP":0.80,
            "USD":1
        },"PKR":{
            "USD":0.0035,
            "GDP":0.0029,
            "PKR":1
        }, "GDP":{
            "PKR":348.70,
            "USD":1.23,
            "GDP":1
        }

    };
    const answer :{
    from:"PKR"| "USD"|"GDP",
    to:"PKR"|"USD"|"GDP",
      amount:number }=await inquirer.prompt([{
        name:"from",
        type:"list",
        choices:["PKR","USD","GDP"],
        message:"Select your currency",
      },{
        name:"amount",
        type:"number",
        message:"enter your converter amount that you want to convert"
      }
    ])
    const {from, to, amount} = answer;
    if(from && to && amount){
        let result = converter[from][to] = amount;
        console.log(`your converter amount after converting is = ${result}`)
    }else{
        console.log("inter an valid input")
    }
}