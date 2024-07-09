const abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'ask',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'promptAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'prompt',
    outputs: [
      {
        internalType: 'contract IPrompt',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'prompts',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

import { getFrameMessage } from '@coinbase/onchainkit';
import { FrameRequest } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const CID_BASE = 8;
  // Return error response if method is not POST
  if (req.method !== 'POST') {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const body: FrameRequest = await req.json();

  // Validate message with @coinbase/onchainkit
  const { isValid, message } = await getFrameMessage(body);
  const bid = message?.button as number;
  console.error(bid);
  const id = CID_BASE + bid;

  // Get the contract instnace
  const contract = '0x583d1C363fE97031d94aA7C5603DfC8B734B14c5';

  // Get encoded data
  const data =
    '0xe47e7e66000000000000000000000000000000000000000000000000000000000000000' + id.toString(16);

  // Return transaction details response to farcaster
  return NextResponse.json({
    chainId: 'eip155:42161',
    method: 'eth_sendTransaction',
    params: {
      abi,
      to: contract,
      data,
      value: '5050000000000000',
    },
  });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({output: "Hello"})
}