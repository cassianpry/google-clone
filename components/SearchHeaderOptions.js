import { useRouter } from 'next/router';
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/outline';
import SearchOption from './SearchOption';

export default function SearchHeaderOption() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={router.query.searchType === '' || !router}
      />
      <SearchOption
        title="images"
        Icon={PhotoIcon}
        selected={router.query.searchType === 'image'}
      />
    </div>
  );
}
