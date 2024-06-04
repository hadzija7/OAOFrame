import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';
import { getCollection } from './lib/collection';

export async function generateMetadata(): Promise<Metadata> {
  const { name } = await getCollection();

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'Fire',
      },
      {
        label: 'Earth',
      },
      {
        label: 'Air',
      },
      {
        label: 'Water',
      },
    ],
    image: `${NEXT_PUBLIC_URL}/constellation.png`,
    post_url: `${NEXT_PUBLIC_URL}/api/start`,
  });

  return {
    title: name,
    description: 'Create an AI NFT through OAO.',
    openGraph: {
      title: name,
      description: 'Create an AI NFT through OAO.',
      images: [`${NEXT_PUBLIC_URL}/api/images/start`],
    },
    other: {
      ...frameMetadata,
      'fc:frame:image:aspect_ratio': '1:1',
    },
  };
}

export default async function Page() {
  const { name, image } = await getCollection();
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-center min-h-screen items-start font-body">
        <div className="w-full md:w-3/4 flex justify-center items-center">
          <img src={image} alt={name} className="w-full lg:max-w-[800px] md:max-w-[400px] h-auto" />
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0 md:pl-4">
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
      </div>
    </div>
  );
}
