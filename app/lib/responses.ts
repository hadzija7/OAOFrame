import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../config';
import {
  getFrameHtml,
  getFireFrameHtml,
  getEarthFrameHtml,
  getAirFrameHtml,
  getWaterFrameHtmlResponse,
} from './getFrameHtml';

export function errorResponse() {
  return new NextResponse(
    getFrameHtml({
      image: `${NEXT_PUBLIC_URL}/api/images/error`,
    }),
  );
}

export async function mintResponse(bid: number): Promise<NextResponse> {
  if (bid == 1) {
    return new NextResponse(
      getFireFrameHtml({
        image: `${NEXT_PUBLIC_URL}/fire.png`,
      }),
    );
  } else if (bid == 2) {
    return new NextResponse(
      getEarthFrameHtml({
        image: `${NEXT_PUBLIC_URL}/earth.png`,
      }),
    );
  } else if (bid == 3) {
    return new NextResponse(
      getAirFrameHtml({
        image: `${NEXT_PUBLIC_URL}/air.png`,
      }),
    );
  } else if (bid == 4) {
    return new NextResponse(
      getWaterFrameHtmlResponse({
        image: `${NEXT_PUBLIC_URL}/water.png`,
      }),
    );
  }
  return new NextResponse(
    getFireFrameHtml({
      image: `${NEXT_PUBLIC_URL}/fire.png`,
    }),
  );
}
