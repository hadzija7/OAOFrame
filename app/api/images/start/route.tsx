import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import { Card } from '../../../components/Card';
import { NEXT_PUBLIC_URL, TOKEN_IMAGE } from '../../../config';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const txhash = searchParams.get('tx') ?? '';

  return new ImageResponse(
    (
      <Card
        message={`Please select the quadrant of your zodiac sign`}
        image={`${NEXT_PUBLIC_URL}/horse.png`}
      />
    ),
  );
}
