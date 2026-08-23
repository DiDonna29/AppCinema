const MediaFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'movies', label: 'Películas' },
    { id: 'series', label: 'Series' },
    { id: 'anime', label: 'Anime' },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-full bg-gray-100 p-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => {
              setActiveFilter(filter.id);
              onFilterChange(filter.id);
            }}
            className={`px-4 py-2 rounded-full transition-colors ${activeFilter === filter.id ? 'bg-black text-white' : 'bg-transparent hover:bg-gray-200'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MediaFilter;