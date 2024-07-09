import { FrameMetadataType, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../config';

export function getFrameHtml(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="og:title" content="OAO: Farcaster">',
    '<meta property="og:description" content="Farcaster Protocol OAO">',
    '<meta property="og:image" content="https://oao-frame.vercel.app/api/images/start">',
    '<meta property="fc:frame:image:aspect_ratio" content="1:1" />',
  ];
  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}

export function getInstructionsFrameHtml(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="fc:frame" content="vNext" />',
    `<meta name="fc:frame:image" content="${NEXT_PUBLIC_URL}/api/images/start" />`,
    '<meta property="fc:frame:button:1" content="Tell the fortune" />',
    '<meta property="fc:frame:button:1:action" content="tx" />',
    `<meta property="fc:frame:button:1:target" content="${NEXT_PUBLIC_URL}/api/make-offer"/>`,
    `<meta property="fc:frame:button:1:post_url" content="${NEXT_PUBLIC_URL}/api/confirm?id=1"/>`,
    // `<meta property="fc:frame:input:text" content="Question 1/4 // What is your favorite chain?" />`
  ];

  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}

export function getOfferFrameHtml(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="fc:frame" content="vNext" />',
    '<meta name="fc:frame:image" content="https://oao-frame.vercel.app/api/images/start" />',
  ];

  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}

export function getEarthFrameHtml(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="fc:frame" content="vNext" />',
    '<meta name="fc:frame:image" content="https://oao-frame.vercel.app/api/images/start" />',
    '<meta property="fc:frame:button:1" content="Taurus" />',
    '<meta property="fc:frame:button:1:action" content="tx" />',
    '<meta property="fc:frame:button:1:target" content="https://oao-frame.vercel.app/api/earth"/>',
    '<meta property="fc:frame:button:1:post_url" content="https://oao-frame.vercel.app/api/confirm?id=3" />',
    '<meta property="fc:frame:button:2" content="Virgo" />',
    '<meta property="fc:frame:button:2:action" content="tx" />',
    '<meta property="fc:frame:button:2:target" content="https://oao-frame.vercel.app/api/earth"/>',
    '<meta property="fc:frame:button:2:post_url" content="https://oao-frame.vercel.app/api/confirm?id=4" />',
    '<meta property="fc:frame:button:3" content="Capricorn" />',
    '<meta property="fc:frame:button:3:action" content="tx" />',
    '<meta property="fc:frame:button:3:target" content="https://oao-frame.vercel.app/api/earth"/>',
    '<meta property="fc:frame:button:3:post_url" content="https://oao-frame.vercel.app/api/confirm?id=5" />',
  ];
  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}

export function getAirFrameHtml(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="fc:frame" content="vNext" />',
    '<meta name="fc:frame:image" content="https://oao-frame.vercel.app/api/images/start" />',
    '<meta property="fc:frame:button:1" content="Gemini" />',
    '<meta property="fc:frame:button:1:action" content="tx" />',
    '<meta property="fc:frame:button:1:target" content="https://oao-frame.vercel.app/api/air"/>',
    '<meta property="fc:frame:button:1:post_url" content="https://oao-frame.vercel.app/api/confirm?id=6" />',
    '<meta property="fc:frame:button:2" content="Libra" />',
    '<meta property="fc:frame:button:2:action" content="tx" />',
    '<meta property="fc:frame:button:2:target" content="https://oao-frame.vercel.app/api/air"/>',
    '<meta property="fc:frame:button:2:post_url" content="https://oao-frame.vercel.app/api/confirm?id=7" />',
    '<meta property="fc:frame:button:3" content="Aquarius" />',
    '<meta property="fc:frame:button:3:action" content="tx" />',
    '<meta property="fc:frame:button:3:target" content="https://oao-frame.vercel.app/api/air"/>',
    '<meta property="fc:frame:button:3:post_url" content="https://oao-frame.vercel.app/api/confirm?id=8" />',
  ];
  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}

export function getWaterFrameHtmlResponse(frameMetadata: FrameMetadataType) {
  const html = getFrameHtmlResponse(frameMetadata);

  const extraTags = [
    '<meta property="fc:frame" content="vNext" />',
    '<meta name="fc:frame:image" content="https://oao-frame.vercel.app/api/images/start" />',
    '<meta property="fc:frame:button:1" content="Cancer" />',
    '<meta property="fc:frame:button:1:action" content="tx" />',
    '<meta property="fc:frame:button:1:target" content="https://oao-frame.vercel.app/api/water"/>',
    '<meta property="fc:frame:button:1:post_url" content="https://oao-frame.vercel.app/api/confirm?id=9" />',
    '<meta property="fc:frame:button:2" content="Scorpio" />',
    '<meta property="fc:frame:button:2:action" content="tx" />',
    '<meta property="fc:frame:button:2:target" content="https://oao-frame.vercel.app/api/water"/>',
    '<meta property="fc:frame:button:2:post_url" content="https://oao-frame.vercel.app/api/confirm?id=10" />',
    '<meta property="fc:frame:button:3" content="Pisces" />',
    '<meta property="fc:frame:button:3:action" content="tx" />',
    '<meta property="fc:frame:button:3:target" content="https://oao-frame.vercel.app/api/water"/>',
    '<meta property="fc:frame:button:3:post_url" content="https://oao-frame.vercel.app/api/confirm?id=11" />',
  ];
  // hack: remove close tags, add aspect ratio and required OG tags
  return `${html.slice(0, html.length - 14)}${extraTags.join('')}</head></html>`;
}
