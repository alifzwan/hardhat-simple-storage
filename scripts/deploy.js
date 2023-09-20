// HARDHAT SIMPLE STORAGE
//
//IMPORT
//  run - allow us to run any hardhat task
//  network - if you want to check that network is exist that can be verified

const { ethers, run, network } = require("hardhat")

async function main() {
    const SimpleStorageFactory =
        await ethers.getContractFactory("SimpleStorage")

    /*  
        MIGRATION FROM ETHERS V5 TO V6: Wait and Address
        
        WAITING FOR BLOCK CONFIRMATION:
        
        await simpleStorage.deployed()  /   await simpleStorage.deployTransaction.wait(1) 
                                    to 
                    await simpleStorage.waitForDeployent()
        
        
        DISPLAY ADDRESS:
        
        simpleStorage.address 
                to
        simpleStorage.target       
    */

    // DEPLOYMENT
    console.log("Deploying, please wait...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    // await simpleStorage.deployed()  in ethers v5
    await simpleStorage.waitForDeployment()
    console.log(`Deployed contract to: ${simpleStorage.target}`) //simpleStorage.address  in ethers v5

    /* To make sure that we only verify if the contract are:
      1) Connected to SEPOLIA chainID and
      2) ETHERSCAN_API_KEY exist


        Etherscan might take a second to keep up with the blockchain
        So we have to wait for etherscan for a few blocks to be mined
    */
    if (network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations....")
        //await simpleStorage.deployTransaction.wait(1)  in ethers v5
        await simpleStorage.waitForDeployment()
        await verify(simpleStorage.target, []) // We add await since verify() deals with promises
    }

    //CONTRACT INTERACTION

    //retrieve()
    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value is: ${currentValue}`)

    //store()
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Update Value is: ${updatedValue}`)
}

// VERIFYING CONTRACT PROGRAMMATICALLY

// async function verify(contractAddress, args){}  // Function keyword
const verify = async (contractAddress, args) => {  // Arrow function
    console.log("Verifying contract..")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
