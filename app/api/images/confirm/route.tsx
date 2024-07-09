import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { Card } from '../../../components/Card';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const txhash = searchParams.get('tx') ?? '';

  return new ImageResponse(<Card message={`Prompt in tx: ${txhash}`} />);
}
