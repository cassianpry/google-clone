import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

import Header from '../../components/Header';
import Image from 'next/image';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="w-52 object-cover"
              src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="google-logo"
              width={272}
              height={92}
              quality="75"
              priority
            />
            <p className="text-sm italic my-10 text-center">
              Este site foi criado para fins de aprendizagem.
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-600"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign In with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
