import dotenv from "dotenv"
dotenv.config()

export const NEXT_PUBLIC_URL = 'https://1106-79-101-176-46.ngrok-free.app'
export const ALLOWED_ORIGIN = '1106-79-101-176-46.ngrok-free.app'
export const CARD_DIMENSIONS = {
  width: 800,
  height: 800,
};
export const TOKEN_IMAGE = `${NEXT_PUBLIC_URL}/constellation.png`;
export const PROMPT_ARBITRUM = "0xC3287BDEF03b925A7C7f54791EDADCD88e632CcD";
export const PROMPT_SEPOLIA = "0x696c83111a49eBb94267ecf4DDF6E220D5A80129";
// export const HITCHHIKER = "0xe75dfff241591bf0c1e01a6c16b4df69221d6007"
export const HITCHHIKER = "0x696Cc51ef38c22a90ab91cEDc71803D8f382b2F2";
export const TEST_CONTRACT = "0x71E7EA2F2406976Ddb0f246265C03a60Dd8bA4Ea"
export const RPC_URL = process.env.RPC_URL;
export const SEPOLIA_CHAIN_ID = '11155111';
export const CHAIN_ID_ARBITRUM = '42161';
export const CHAIN_ID = SEPOLIA_CHAIN_ID;

export const FEE_SEPOLIA = '400000000000000000'
export const FEE_ARBITRUM = '400000000000000'

export const EXPLORERS = {
  '11155111' : 'https://sepolia.etherscan.io/',
  '42161' : 'https://arbiscan.io/'
}

export const HITCHHIKER_ABI = [{"inputs":[{"internalType":"address","name":"_aiOracle","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"contract IAIOracle","name":"expected","type":"address"},{"internalType":"contract IAIOracle","name":"found","type":"address"}],"name":"UnauthorizedCallbackSource","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"string","name":"output","type":"string"}],"name":"InferenceReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"requestId","type":"uint256"},{"indexed":false,"internalType":"string","name":"prompt","type":"string"},{"indexed":false,"internalType":"uint256","name":"modelId","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"InferenceRequested","type":"event"},{"inputs":[],"name":"aiOracle","outputs":[{"internalType":"contract IAIOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"bytes","name":"output","type":"bytes"},{"internalType":"bytes","name":"callbackData","type":"bytes"}],"name":"aiOracleCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"prompt","type":"string"}],"name":"ask","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"callbackGasLimit","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"modelId","type":"uint256"}],"name":"estimateFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"}],"name":"isFinalized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestRequestId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"prompts","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
export const TEST_ABI = [{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"string","name":"response","type":"string"}],"name":"registerResponse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"responses","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
