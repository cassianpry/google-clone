import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import mock from './mockData';

export default function Search({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />
      {/* Search Results */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? mock
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&${
          context.query.searchType && '&searchType=image'
        }`
      ).then((response) => response.json());
  return {
    props: { results: data },
  };
}
