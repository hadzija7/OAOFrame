import { NEXT_PUBLIC_URL } from '../config';

export async function getCollection() {
  const name = 'OAO Frame: AI NFT';
  const image = `${NEXT_PUBLIC_URL}/horse.png`;
  return { name, image };
}
