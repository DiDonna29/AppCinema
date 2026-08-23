const MediaSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar películas, series o anime..."
          className="w-full px-6 py-3 border-0 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="absolute right-3 p-2 text-gray-500 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MediaSearchBar;