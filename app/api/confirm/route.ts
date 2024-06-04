import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { getFrameHtml } from '../../lib/getFrameHtml';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const txhash = body.untrustedData.transactionId;
  const id = req.url.split('=')[1];

  return new NextResponse(
    getFrameHtml({
      buttons: [
        {
          label: 'View on Etherscan',
          action: 'link',
          target: `https://arbiscan.io/tx/${txhash}`,
        },
        {
          label: 'check the Result',
        },
      ],
      image: `${NEXT_PUBLIC_URL}/giraffe.png`,
      post_url: `${NEXT_PUBLIC_URL}/api/result?id=${id}`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
