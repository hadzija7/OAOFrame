import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { allowedOrigin } from '../../lib/origin';
import { frameResponse } from '../../lib/responses';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body);

  if (isValid && allowedOrigin(message)) {
    return await frameResponse(message?.button);
  } else return new NextResponse('Unauthorized', { status: 402 });
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
