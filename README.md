# 👷🏻 Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
      DESCRIPTION                                      COMMANDS

To deploy your smart contract               - yarn hardhat run scripts/deploy.js

Compile you solidity file                   - yarn hardhat compile

Delete you cache and artifacts              - yarn hardhat clean

Display a list of hardhat accounts          - yarn hardhat node

Test your Smart Contract                    - yarn hardhat test

Write a gas report                          - REPORT_GAS=true yarn hardhat test

Additional help                             - yarn hardhat help
```
# Hardhat Simple Storage
- [Hardhat Simple Storage](#hardhat-simple-storage)
- [Usage](#usage)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
- [Usage](#usage)
  - [Testing](#testing)
    - [Test Coverage](#test-coverage)
  - [Estimate gas](#estimate-gas)
  - [Local Deployment](#local-deployment)
    - [Important localhost note](#important-localhost-note)
  - [Deployment to a testnet or mainnet](#deployment-to-a-testnet-or-mainnet)
    - [Verify on etherscan](#verify-on-etherscan)
- [Blockchain Interaction without deploy.js](#blockchain-interaction-without-deployjs)
- [Linting](#linting)
- [Thank you!](#thank-you)
   
This project is apart of the Hardhat FreeCodeCamp video.

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an output like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`

## Quickstart

```
git clone https://github.com/PatrickAlphaC/hardhat-simple-storage-fcc
cd hardhat-simple-storage-fcc
yarn
yarn hardhat
```

# Usage

Deploy:

```
yarn hardhat run scripts/deploy.js
```

## Testing
Running test is absolutely critical for our smart contract development journey.
Thus, we're going to spend a lot of time writing a really good tests in the future

```
yarn hardhat test
```

### Test Coverage

```
yarn hardhat coverage
```

## Estimate gas

You can estimate how much gas things cost by running:

```
yarn hardhat test
```

And you'll see and output file called `gas-report.txt`

## Local Deployment 

If you'd like to run your own local hardhat network, you can run:

```
yarn hardhat node
```

And then **in a different terminal**

```
yarn hardhat run scripts/deploy.js --network localhost
```

And you should see transactions happen in your terminal that is running `npx hardhat node`

### Important localhost note

If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in. And maybe don't do this if you're a little confused by this. 

## Deployment to a testnet or mainnet

1. Setup environment variables

You'll want to set your `SEPOLIA_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `SEPOLIA_RPC_URL`: This is url of the sepolia testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

```
yarn hardhat run scripts/deploy.js --network sepolia
```

### Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file as seen in the `.env.example`.

In it's current state, if you have your api key set, it will auto verify sepolia contracts!

However, you can manual verify with:

```
yarn hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
```

### Blockchain Interaction without deploy.js:
So you can deploy contract without calling - ```yarn hardhat run scripts/deploy.js --network sepolia/hardhat ```
## How? 
Open the hardhat console:

```
yarn hardhat console 
```
Deploy the contract:
```
const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage") 
```

Make a transaction (store):
```
await simpleStorage.store(value)
```
Retrieve the value:
```
await simpleStorage.retrieve()
```

# Linting

To check linting / code formatting:
```
yarn lint
```
or, to fix: 
```
yarn lint:fix
```

# Thank you!




