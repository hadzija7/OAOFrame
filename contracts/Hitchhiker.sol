pragma solidity ^0.8.19;

import "./interfaces/IAIOracle.sol";
import "./AIOracleCallbackReceiver.sol";

interface IPrompt {
    function estimateFee(uint256 modelId) external view returns (uint256);
    function calculateAIResult(uint256 modelId, string calldata prompt) external payable;
}

contract Hitchhiker is AIOracleCallbackReceiver {

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }
    
    mapping(uint256 => uint64) public callbackGasLimit;
  
    mapping(uint256 => string) public prompts;

    uint256[] requestIds;

    function getLatestRequestId() public view returns(uint256) {
        return requestIds[requestIds.length];
    }

    constructor(address _aiOracle) AIOracleCallbackReceiver(IAIOracle(_aiOracle)){
        owner = msg.sender;
        callbackGasLimit[50] = 500_000; // Stable Diffusion
        callbackGasLimit[11] = 5_000_000; // Llama3
    }

    function aiOracleCallback(uint256 requestId, bytes calldata output, bytes calldata callbackData) external override onlyAIOracleCallback() {
        
    }

    function ask(string calldata prompt) external payable {
        uint256 requestId = aiOracle.requestCallback{value: msg.value}(11, bytes(prompt), address(this), callbackGasLimit[11], "");
    }
}
