// SPDX-License-Identifier: MIT
// @author: Developed by Pinqode and Greyshaws.
// @descpriton: Patents creator and manager

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IPatentic {
    // The token being sold
    function token() external returns (ERC20);

    // Address where funds are collected
    function wallet() external returns (address payable);

    // How many token units a buyer gets per wei
    function rate() external returns (uint256);

    // Amount of wei raised
    function weiRaised() external returns (uint256);

    /**
     * Event for token purchase logging
     * @param purchaser who paid for the tokens
     * @param beneficiary who got the tokens
     * @param value weis paid for purchase
     * @param amount amount of tokens purchased
     */
    event TokenPurchase(
        address indexed purchaser,
        address indexed beneficiary,
        uint256 value,
        uint256 amount
    );

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

    event NewPatent(
        address indexed from,
        uint256 timestamp,
        PatentContent PatentData
    );
    event NewMessage(
        address indexed from,
        address indexed to,
        uint256 timestamp,
        string text,
        string patent
    );

    function createPatent(
        string memory _patentName,
        string memory _patentText,
        string memory _patentType
    ) external payable;

    function buyPatent(address _beneficiary) external payable;

    function updateRate(uint256 _amount) external;

    function getPatentsOnAddress() external view returns (Patent[] memory);

    function getPatents() external view returns (Patent[] memory);

    function getNoOfPatents() external view returns (uint256);

    function addMessage(
        address _to,
        string memory _text,
        string memory _patent
    ) external;

    function getMessagesOnAddress() external view returns (Message[] memory);

    function getNoOfMessages() external view returns (uint256);
}
