pragma solidity ^0.8.19;
interface IPrompt {
  function estimateFee(uint256 modelId) external view returns (uint256);
  function calculateAIResult(uint256 modelId, string calldata prompt) external payable;
}
contract Constellation {
  IPrompt public prompt;
  mapping(uint256 => string) public prompts;
  constructor(address promptAddress) {
    prompt = IPrompt(promptAddress);
    prompts[0] = 'What is the horoscope for Aries today?'; //
    prompts[1] = 'What is the horoscope for Leo today?'; //
    prompts[2] = 'What is the horoscope for Sagittarius today?'; //
    prompts[3] = 'What is the horoscope for Taurus today?'; //
    prompts[4] = 'What is the horoscope for Virgo today?'; //
    prompts[5] = 'What is the horoscope for Capricorn today?'; //
    prompts[6] = 'What is the horoscope for Gemini today?'; //
    prompts[7] = 'What is the horoscope for Libra today?'; //
    prompts[8] = 'What is the horoscope for Aquarius today?'; //
    prompts[9] = 'What is the horoscope for Cancer today?'; //
    prompts[10] = 'What is the horoscope for Scorpio today?'; //
    prompts[11] = 'What is the horoscope for Pisces today?'; //
  }

  function ask(uint256 id) external payable {
    prompt.calculateAIResult{value: msg.value}(11, prompts[id]);
  }
}
