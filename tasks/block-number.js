// GETTING CURRENT BLOCK NUMBER/ BLOCKCHAIN WE WORKING WITH

/* JAVASCRIPT FUNCTION:
    It has 2 types of function:
    
    1) Using function keyword
    2) Anonymous function (arrow function) - =>
    
    Arrow function:
    - In javascript, you can define function without using function keyword

    - It's the same as using function keyword:
    - const blockTask = async function() ={}
    - async function blockTask(){}
    */ 

    // IMPORT
const {task} = require("hardhat/config")


// Adding the task to the list of AVAILABLE TASKS: yarn hardhat
task("block-number", "Print the current block number").setAction(

    // When we run tasks, we automatically pass:
    // our anonymous functions, taskArgs
    // and hre (HardhatRuntimeEnvironment) which are exactly like hardhat
    async(taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)

