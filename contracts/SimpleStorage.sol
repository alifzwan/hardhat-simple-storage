// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract SimpleStorage {
    // Attribute
    uint256 favouriteNumber;

    // List of attributes(

    struct People {
        uint256 favouriteNumber;
        string name;
    }

    // To access struct.
    // [] null if you dont have exact limit of people

    People[] public people;

    // It's like dictionary
    // Used to store the data in the form of key-value pairs

    mapping(string => uint256) public nameToFavouritenumber;
    mapping(uint256 => string) public favouritenumberToName;

    // memory, calldata, storage
    // string is considered arrays of bytes

    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        people.push(People(_favouriteNumber, _name));
        nameToFavouritenumber[_name] = _favouriteNumber;
        favouritenumberToName[_favouriteNumber] = _name;
    }

    // store() - store number

    function store(uint256 _favouriteNumber) public virtual {
        favouriteNumber = _favouriteNumber;
    }

    // view - only view data which no data will be saved (doesn't costs gas)
    // pure - not only data not be saved, it also don't read the data

    // retrieve() - call/retrieve the number

    function retrieve() public view returns (uint256) {
        return favouriteNumber;
    }
}
