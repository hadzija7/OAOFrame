import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { RCard } from '../../../components/Card';

//need to retrieve OAO result and display it
//We need to retrieve requestId, then we could get oracle output from the requests mapping.
//SimplePrompt
//requestId can be retrieved from the logs of the transaction

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const txhash = searchParams.get('tx') ?? '';

  return new ImageResponse(<RCard message={`${txhash}`} />);
}
