import { getFrameMessage } from '@coinbase/onchainkit';
import { FrameRequest } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { CHAIN_ID, FEE_SEPOLIA, HITCHHIKER, HITCHHIKER_ABI, NEXT_PUBLIC_URL, RPC_URL } from '../../config';

import {Web3} from 'web3';
const web3 = new Web3(RPC_URL);

export async function POST(req: NextRequest) {
  // Return error response if method is not POST
  if (req.method !== 'POST') {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const body: FrameRequest = await req.json();

  // Validate message with @coinbase/onchainkit
  const { isValid, message } = await getFrameMessage(body);

  const contract = new web3.eth.Contract(HITCHHIKER_ABI, HITCHHIKER);
  const prompt = message?.raw.action.input ? message?.raw.action.input.text : "What is the ultimate answer to life, the universe, and everything?"
  console.log("Prompt: ", prompt)

  const fee = Number(await contract.methods.estimateFee(11).call()).toString();
  console.log("Fee: ", fee)
  
  const data = contract.methods.ask(prompt).encodeABI();

  // Return transaction details response to farcaster
  return NextResponse.json({
    chainId: `eip155:${CHAIN_ID}`,
    method: 'eth_sendTransaction',
    params: {
      abi: HITCHHIKER_ABI,
      to: HITCHHIKER,
      data,
      value: fee,
    },
  });
}