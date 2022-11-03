import Image from 'next/image';
import { useRouter } from 'next/router';

import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  };

  return (
    <>
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google-logo"
          width="300"
          height="100"
          quality="75"
          priority
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            autoFocus
            className="flex-grow focus:outline outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I&apos;m Feeling Lucky</button>
        </div>
      </form>
    </>
  );
}
