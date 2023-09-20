// TESTING

// Hardhat testing works with the Mocha framework, which is a Javascript based framework for running our tests

// There's 2 ways you can test your contract:
// 1. Directly in solidity - The code would be as close to the as possible
// 2. Directly in modern programming language - pros: you have more flexibility to do more stuff to interact and test

const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  //it() - what we expect it to be
  it("Should start with a favourite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    //assert
    //expect
    assert.equal(currentValue.toString(), expectedValue); //we want the currentValue = expectedValue
    //expect(currentValue.toString()).to.equal(expectedValue);
  });

  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transactionResponse =
      await simpleStorage.simpleStorage.store(expectedValue);

    await transactionResponse.waitForDeployment();

    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });

  /* Nested describe - it will be helpful for seperating and modularizing our test
    describe("Something", function(){
      beforeEach(async function(){
        --
      })


      it()
   })*/
});
