// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPatentic {

    struct PatentContent {
        string patentName;
        string patentText;
        string patentType;
    }

    struct Patent {
        address patentOwner;
        PatentContent patentData;
        uint256 timestamp;
    }

    struct Message {
        address to;
        address from;
        uint256 timestamp;
        string text;
        string patent;
    }

    event NewPatent(address indexed from, uint256 timestamp, PatentContent PatentData);
    event NewMessage(address indexed from, address indexed to, uint256 timestamp, string text, string patent);

    function createPatent(string memory _patentName, string memory _patentText, string memory _patentType) external;

    function getPatentsOnAddress() external view returns (Patent[] memory);

    function getAllPatents() external view returns (Patent[] memory);

    function getTotalPatents() external view returns (uint256);

    function addMessage(address _to, string memory _text, string memory _patent) external;

    function getMessagesOnAddress() external view returns (Message[] memory);

    function getTotalMessages() external view returns (uint256);

}
