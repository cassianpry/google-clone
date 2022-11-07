import Image from 'next/image';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function ImageResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((res) => (
          <div key={res.link} className="max-w-xl mb-8">
            <div className="group">
              <Link href={res.image.contextLink}>
                <Image
                  className="group-hover:shadow-xl w-full h-60 object-cover-fill mb-4"
                  src={res.link}
                  alt={res.title}
                  width={res.image.width}
                  height={res.image.height}
                />
              </Link>
              <Link
                className="text-sm truncate group-hover:underline decoration-blue-800 "
                href={res.image.contextLink}
              >
                <h2 className="truncate text-xl font-medium text-blue-800">
                  {res.title}
                </h2>
              </Link>
              <p className="group-hover:underline text-gray-600">
                {res.displayLink}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
