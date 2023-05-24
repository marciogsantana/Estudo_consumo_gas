// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    
    // map to receive an array of positive and negative integers

    mapping(address => int[]) public intArrayMapping;

    // array to store the arrays

    int[][] public intArray;

    // function that takes an array and writes to the mapping intArrayMapping and the array intArray

    function storeIntArray(int[] calldata _intArray) public {
        intArrayMapping[msg.sender] = _intArray;
        intArray.push(_intArray);
    }

    //function that takes an index and returns the array at that position
    
    function getIntArray() public view returns (int256[][] memory) {
    return intArray;
    }

    // function that takes an address and returns the array at that address
    
    function getIntArrayMapping(address _address) public view returns (int[] memory) {
        return intArrayMapping[_address];
    }
    
}
