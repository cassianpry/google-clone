import Head from 'next/head';
import { useRouter } from 'next/router';
import ImageResults from '../components/ImageResults';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Response from './mock.data';

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Results */}
      {router.query.searchType === 'image' ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || '1';

  //false=fetch data from Google API
  const mockData = false;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: { results: data },
  };
}
