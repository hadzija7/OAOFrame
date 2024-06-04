import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { RCard } from '../../../components/Card';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const txhash = searchParams.get('tx') ?? '';

  return new ImageResponse(<RCard message={`${txhash}`} />);
}
