import { NextRequest, NextResponse } from 'next/server';
import { HITCHHIKER, HITCHHIKER_ABI, NEXT_PUBLIC_URL, RPC_URL, TEST_ABI, TEST_CONTRACT } from '../../config';
import { getFrameHtmlResponse } from '@coinbase/onchainkit';

import {Web3} from 'web3';
import { getResultPendingFrameHtml } from '../../lib/getFrameHtml';
const web3 = new Web3(RPC_URL);

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const url = await req.url;
  const idstring = url.split('=')[1];
  const txhash = idstring as string;

  //call the contract and return output for requestId
  //we might need to await for oracle to return the result

  // let receipt = null;
  // while (receipt === null) {
  //   try {
  //     receipt = await web3.eth.getTransactionReceipt(txhash);
  //   } catch (error) {
  //     console.error('Error fetching transaction receipt:', error);
  //   }
  //   if (receipt === null) {
  //     console.log('Transaction not mined yet. Waiting...');
  //     await sleep(1000); // wait 1 second before checking again
  //   }
  // }

  try {
    const receipt = await web3.eth.getTransactionReceipt(txhash);
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

    /**
     * Reading state from Hitchhiker contract
     */
    const contract: any = new web3.eth.Contract(HITCHHIKER_ABI, HITCHHIKER);
    const inferenceResult = await contract.methods.prompts(requestId).call()
    console.log("InferenceResult: ", inferenceResult);

    if (!inferenceResult) {
      const ret = getResultPendingFrameHtml(txhash)
      return new NextResponse(ret)
    }

    const html = getFrameHtmlResponse({
      image: `${NEXT_PUBLIC_URL}/api/images/result?tx=fslkdjfsldkjfsldk${inferenceResult}`,
    });
  
    const extraTags = [
      '<meta property="og:title" content="OAO: Farcaster">',
      '<meta property="og:description" content="Farcaster Protocol OAO">',
      '<meta property="og:image" content="https://oao-frame.vercel.app/api/images/start">',
      '<meta property="fc:frame:image:aspect_ratio" content="1:1" />',
    ];
    // hack: remove close tags, add aspect ratio and required OG tags
    const ret = `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
  
    return new NextResponse(ret);

  } catch (error) {
    console.error('Error fetching transaction receipt:', error);

    const ret = getResultPendingFrameHtml(txhash);
  
    return new NextResponse(ret);

  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
