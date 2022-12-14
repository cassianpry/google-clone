import { useRouter } from 'next/router';

export default function SearchOption({ title, Icon, selected }) {
  const router = useRouter();
  const selectTab = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === 'images' ? 'image' : ''
      }`
    );
  };
  return (
    <div
      onClick={() => selectTab(title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-2 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
    >
      <Icon className="h-4" />
      <p>{title[0].toUpperCase() + title.substring(1)}</p>
    </div>
  );
}
