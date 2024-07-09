import { getFrameMessage } from '@coinbase/onchainkit';
import { FrameRequest } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { CHAIN_ID, FEE_SEPOLIA, HITCHHIKER, HITCHHIKER_ABI, RPC_URL } from '../../config';

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
  const bid = message?.button as number;

  // Get the contract instnace
  const contract = new web3.eth.Contract(HITCHHIKER_ABI, HITCHHIKER);
  const prompt = "Generate image of BTC";

  const data = contract.methods.ask(prompt).encodeABI();
  console.log("Data: ", data)

  // // Get encoded data
  // const data =
  //   '0xe47e7e66000000000000000000000000000000000000000000000000000000000000000' + bid.toString(16);

  // Return transaction details response to farcaster
  return NextResponse.json({
    chainId: `eip155:${CHAIN_ID}`,
    method: 'eth_sendTransaction',
    params: {
      abi: HITCHHIKER_ABI,
      to: HITCHHIKER,
      data,
      value: FEE_SEPOLIA,
    },
  });
}