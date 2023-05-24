const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", function () {
  let myContract;

  beforeEach(async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    myContract = await MyContract.deploy();
    await myContract.deployed();
  });

  it("should store an int array and return it", async function () {
    const intArray = [1, 2, 3, 4, 5];
    const tx = await myContract.storeIntArray(intArray);
    const receipt = await tx.wait();
    expect(receipt.gasUsed).to.be.lessThan(1000000);

    const storedIntArray = await myContract.getIntArray();
    expect(storedIntArray).to.have.lengthOf(1);
    expect(storedIntArray[0]).to.deep.equal(intArray);
  });

  it("should store an int array in the mapping and return it", async function () {
    const intArray = [1, 2, 3, 4, 5];
    const tx = await myContract.storeIntArray(intArray);
    const receipt = await tx.wait();
   // expect(receipt.gasUsed).to.be.lessThan(1000000);

    const storedIntArray = await myContract.getIntArrayMapping(await ethers.provider.getSigner().getAddress());
   // expect(storedIntArray).to.deep.equal(intArray);
  });
});
