import Parser from 'html-react-parser';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((res) => (
        <div key={res.link} className="max-w-xl mb-8">
          <div className="group">
            <Link
              className="group-hover:underline decoration-blue-800"
              href={res.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {res.title}
              </h2>
            </Link>
            <Link className="text-sm truncate" href={res.link}>
              {res.formattedUrl}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(res.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons/>
    </div>
  );
}
