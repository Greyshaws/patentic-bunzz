// SPDX-License-Identifier: MIT
// @author: Developed by Pinqode and Greyshaws.
// @descpriton: Patents creator and manager

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IPatentic.sol";

contract Patentic is IPatentic, ReentrancyGuard, Ownable {
    uint256 private _noOfPatents;
    uint256 private _noOfMessages;

    // The token being sold
    ERC20 public override token;
    // Address where funds are collected
    address payable public override wallet;
    // How many token units a buyer gets per wei
    uint256 public override rate = 1;
    // Amount of wei raised
    uint256 public override weiRaised;

    mapping(address => Patent[]) private _patentsByAddress;

    mapping(address => Message[]) private _addressMessages;

    Patent[] private _patents;

    /**
   * @param _wallet Address where collected funds will be forwarded to
   * @param _token Address of the token being sold
   */
  constructor(address payable _wallet, ERC20 _token) {
    require(_wallet != address(0));

    wallet = _wallet;
    token = _token;
  }

    
    /*
     * created a new patent with data sent fromthr client
     */
    function createPatent(
        string memory _patentName,
        string memory _patentText,
        string memory _patentType,
    ) external payable override {
        buyPatent(msg.sender);

        _noOfPatents += 1;
        _patentsByAddress[msg.sender].push(
            Patent(
                msg.sender,
                PatentContent(_patentName, _patentText, _patentType),
                block.timestamp
            )
        );
        _patents.push(
            Patent(
                msg.sender,
                PatentContent(_patentName, _patentText, _patentType),
                block.timestamp
            )
        );

        emit NewPatent(
            msg.sender,
            block.timestamp,
            PatentContent(_patentName, _patentText, _patentType)
        );
    }

    /**
   * @dev low level token purchase ***DO NOT OVERRIDE***
   * @param _beneficiary Address performing the token purchase
   */
  function buyPatent(address _beneficiary) public payable override {

    uint256 weiAmount = msg.value;
    _preValidatePurchase(_beneficiary, weiAmount);

    // calculate token amount to be created
    uint256 tokens = _getTokenAmount(weiAmount);

    // update state
    weiRaised += weiAmount;

    _processPurchase(_beneficiary, tokens);
    emit TokenPurchase(
      msg.sender,
      _beneficiary,
      weiAmount,
      tokens
    );

    _updatePurchasingState(_beneficiary, weiAmount);

    _forwardFunds();
    _postValidatePurchase(_beneficiary, weiAmount);
  }

  /**
   * @dev for owner to update rate ***DO NOT OVERRIDE***
   * @param _amount Number of token units a buyer gets per wei
   */
  function updateRate(uint256 _amount) public override onlyOwner {
      require(_amount > 0);
      rate = _amount;
  }

    /**
     * Get patents of address on the blockchain
     */
    function getPatentsOnAddress() external view override returns (Patent[] memory) {
        return _patentsByAddress[msg.sender];
    }

    //  function getPatentById(address _address, string memory timestamp) external view returns (Patent memory) {
    //     return _patentsByAddress[msg.sender][]
    //  }

    /**
     * Retrieve all patents with address on the blockchain
     */
    function getPatents() external view override returns (Patent[] memory) {
        return _patents;
    }

    /**
     * Get number of patents on the blockchain
     */
    function getNoOfPatents() external view override returns (uint256) {
        return _noOfPatents;
    }

    /**
     * Add Message to addresses
     */
    function addMessage(
        address _to,
        string memory _text,
        string memory _patent
    ) external override {
        require(_to == owner(), "Cannot send message to yourself");
        _addressMessages[msg.sender].push(
            Message(_to, msg.sender, block.timestamp, _text, _patent)
        );
        _addressMessages[_to].push(
            Message(_to, msg.sender, block.timestamp, _text, _patent)
        );
        _noOfMessages += 1;

        emit NewMessage(msg.sender, _to, block.timestamp, _text, _patent);
    }

    /**
     * Get address messages from blockchain
     */
    function getMessagesOnAddress() external view override returns (Message[] memory) {
        return _addressMessages[msg.sender];
    }

    function getNoOfMessages() external view override returns (uint256) {
        return _noOfMessages;
    }


    // -----------------------------------------
  // Internal interface (extensible)
  // -----------------------------------------

  /**
   * @dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met. Use super to concatenate validations.
   * @param _beneficiary Address performing the token purchase
   * @param _weiAmount Value in wei involved in the purchase
   */
  function _preValidatePurchase(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal pure
  {
    require(_beneficiary != address(0), "_beneficiary is not an address");
    require(_weiAmount != 0, "_weiAmount is 0");
  }

  /**
   * @dev Validation of an executed purchase. Observe state and use revert statements to undo rollback when valid conditions are not met.
   * @param _beneficiary Address performing the token purchase
   * @param _weiAmount Value in wei involved in the purchase
   */
  function _postValidatePurchase(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal
  {
    // optional override
  }

  /**
   * @dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends its tokens.
   * @param _beneficiary Address performing the token purchase
   * @param _tokenAmount Number of tokens to be emitted
   */
  function _deliverTokens(
    address _beneficiary,
    uint256 _tokenAmount
  )
    internal
  {
    token.transfer(_beneficiary, _tokenAmount);
  }

  /**
   * @dev Executed when a purchase has been validated and is ready to be executed. Not necessarily emits/sends tokens.
   * @param _beneficiary Address receiving the tokens
   * @param _tokenAmount Number of tokens to be purchased
   */
  function _processPurchase(
    address _beneficiary,
    uint256 _tokenAmount
  )
    internal
  {
    _deliverTokens(_beneficiary, _tokenAmount);
  }

  /**
   * @dev Override for extensions that require an internal state to check for validity (current user contributions, etc.)
   * @param _beneficiary Address receiving the tokens
   * @param _weiAmount Value in wei involved in the purchase
   */
  function _updatePurchasingState(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal
  {
    // optional override
  }

  /**
   * @dev Override to extend the way in which ether is converted to tokens.
   * @param _weiAmount Value in wei to be converted into tokens
   * @return Number of tokens that can be purchased with the specified _weiAmount
   */
  function _getTokenAmount(uint256 _weiAmount)
    internal view returns (uint256)
  {
    return _weiAmount * rate;
  }

  /**
   * @dev Determines how ETH is stored/forwarded on purchases.
   */
  function _forwardFunds() internal {
    wallet.transfer(msg.value);
  }
}
