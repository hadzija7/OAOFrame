import { NextRequest, NextResponse } from 'next/server';
import { HITCHHIKER, HITCHHIKER_ABI, NEXT_PUBLIC_URL, RPC_URL, TEST_ABI, TEST_CONTRACT } from '../../config';
import { getFrameHtmlResponse } from '@coinbase/onchainkit';

import {Web3} from 'web3';
const web3 = new Web3(RPC_URL);

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const url = await req.url;
  const idstring = url.split('=')[1];
  const id = parseInt(idstring as string);

  //call the contract and return output for requestId
  //we might need to await for oracle to return the result

  /**
   * Reading state from Hitchhiker contract
   */
  const contract: any = new web3.eth.Contract(HITCHHIKER_ABI, HITCHHIKER);
  const inferenceResult = await contract.methods.prompts(id).call()
  console.log("InferenceResult: ", inferenceResult);
  
  /**
   * Reading state from the test contract
   */
  // const contract: any = new web3.eth.Contract(TEST_ABI, TEST_CONTRACT);
  // const inferenceResult = await contract.methods.responses(id).call();
  // console.log("InferenceResult: ", inferenceResult);

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
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
