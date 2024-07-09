import { NextRequest, NextResponse } from 'next/server';
import { CHAIN_ID, EXPLORERS, NEXT_PUBLIC_URL, RPC_URL } from '../../config';
import { getFrameHtml } from '../../lib/getFrameHtml';
import {Web3} from 'web3';

const web3 = new Web3(RPC_URL);

function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// need to get requestId from logs and then get the OAO output
// I could store requestIds in the contract storage and then query the contract to get it as well
async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const txhash = body.untrustedData.transactionId;
  const id = req.url.split('=')[1];

  console.log("Farcaster body: ", body)
  console.log("Transaction hash: ", txhash)

  let receipt = null;
  while (receipt === null) {
    try {
      receipt = await web3.eth.getTransactionReceipt(txhash);
    } catch (error) {
      console.error('Error fetching transaction receipt:', error);
    }
    if (receipt === null) {
      console.log('Transaction not mined yet. Waiting...');
      await sleep(1000); // wait 1 second before checking again
    }
  }

  // const receipt = await web3.eth.getTransactionReceipt(txhash)
  console.log("receipt: ", receipt)

  /**
   * Extracting requestId from transaction logs
   */
  const data = receipt.logs[1].data ? receipt.logs[1].data : '0x'
  const event_abi = [
    {
      "name": "requestId",
      "type": "uint256"
    },
    {
      "name": "prompt",
      "type": "string"
    },
    {
      "name": "modelId",
      "type": "uint256"
    },
    {
      "name": "sender",
      "type": "address"
    }
  ];

  const decodedData = web3.eth.abi.decodeParameters(event_abi, data.toString());
  const requestId = Number(decodedData.requestId)
  console.log("Decoded data: ", Number(decodedData.requestId).toString())

  // const requestId = 1;
  // console.log("Request ID: ", requestId)

  return new NextResponse(
    getFrameHtml({
      buttons: [
        {
          label: 'View on Etherscan',
          action: 'link',
          target: `${EXPLORERS[CHAIN_ID]}/tx/${txhash}`, 
        },
        {
          label: 'check the Result',
        },
      ],
      image: `${NEXT_PUBLIC_URL}/giraffe.png`,
      post_url: `${NEXT_PUBLIC_URL}/api/result?id=${requestId}`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
