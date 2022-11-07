import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import User from './User';
import SearchHeaderOption from './SearchHeaderOptions';

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Link href="/">
          <Image
            // className="cursor-pointer"
            src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google-logo"
            width="120"
            height="40"
            quality="75"
            priority
            onClick={() => router.push('/')}
          />
        </Link>
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            className="w-full flex-grow focus:outline outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            autoFocus
          />
          <XMarkIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="h-6 text-blue-500 hidden sm:inline-flex pl-4 border-l-2 border-gray-300 mr-3" />
          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button type="submit" hidden onClick={search}></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOption />
    </header>
  );
}
