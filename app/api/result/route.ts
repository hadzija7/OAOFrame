import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { getFrameHtml } from '../../lib/getFrameHtml';
import { getFrameHtmlResponse } from '@coinbase/onchainkit';
import { ethers } from 'ethers';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const url = await req.url;
  const idstring = url.split('=')[1];
  const id = parseInt(idstring as string);
  const results = [
    'Aries is the first sign of the zodiac.Today, the astrological influences for Aries are as follows:* Sun: The Sun is in the sign of Pisces, which can bring up themes of spirituality, intuition, and emotional depth. Aries individuals may feel more sensitive and empathetic today',
    'According to the Sun sign astrology,Leo is the zodiac sign for people born between July 23rd and August 22nd. Today, the Sun is in the sign of Aries, which is opposite to Leo. This means that Leo individuals may feel a bit challenged or sensitive today',
    'Today, you may feel a strong desireto break free from the constraints of your daily routine and explore new horizons. You could be feeling restless and eager to shake things up, whether that means taking a spontaneous trip, trying a new hobby, or simply changing up your daily routine.',
    '* Sun: Ruled by Venus, Taurus is associated with themes of abundance, beauty, and creativity.* Moon: Ruled by Luna, Taurus is associated with themes of emotions, intuition, and nurturing.',
    'Today, you may feel a strong desire to get things done and take care of any tasks or responsibilities that have been weighing on you. ',
    "You may feel a strong desire to retreat into your shell today, Capricorn, and that's okay. The Moon is in your 4th house, and it's okay to take some time for yourself. Take a break from the hustle and bustle of daily life and focus on recharging your energy.",
    'Gemini is the third sign of the zodiac, and people born under this sign are known for their adaptability, curiosity, and communication skills. Here are some general horoscope predictions for Gemini today:* Positive: Gemini are likely to feel energized and motivated ',
    'Libra, you are in for a day of balance and harmony. The universe is aligning in your favor, bringing you opportunities for growth and expansion. You may feel a sense of renewed hope and optimism, and this is a great time to pursue your passions and interests. ',
    "Today, you may find yourself feeling restless and in need of a change. You're itching to break free from the monotony of your daily routine and explore new horizons. ",
    'Today, Cancer is likely to feel a strong connection to their emotions and intuition. You may be more sensitive and emotional than usual, and you may feel a strong urge to nurture and care for those around you.',
    'Scorpio is a water sign,and people born under this sign are known for their intensity, passion, and mysterious nature. Here are some general predictions for Scorpios today:♏ Positive energy: Today, Scorpios may feel a surge of positivity and enthusiasm, which could help them tackle any challenges they face with confidence and determination. ',
    "💰 Financial matters may be a bit tricky today,Pisces. Be cautious with your spending and avoid making any big purchases. It's also a good idea to review your budget and make sure you're on track with your financial goals. ",
  ];
  console.log(results[id]);

  const html = getFrameHtmlResponse({
    image: `${NEXT_PUBLIC_URL}/api/images/result?tx=${results[id]}`,
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
