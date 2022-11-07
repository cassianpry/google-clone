import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function User({ className }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image
          className={`rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
          src={session.user.image}
          alt="user-image"
          onClick={signOut}
          quality="75"
          width={40}
          height={40}
          priority
          as="link"
        />
      </>
    );
  }

  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  );
}
