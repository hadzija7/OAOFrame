import { NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../config';
import {
  getFrameHtml,
  getInstructionsFrameHtml,
} from './getFrameHtml';

export function errorResponse() {
  return new NextResponse(
    getFrameHtml({
      image: `${NEXT_PUBLIC_URL}/api/images/error`,
    }),
  );
}

export async function frameResponse(bid: number): Promise<NextResponse> {
  return new NextResponse(
    getInstructionsFrameHtml({
      image: `${NEXT_PUBLIC_URL}/alien3.png`,
    })
  )
}
