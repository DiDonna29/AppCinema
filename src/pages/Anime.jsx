const Anime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState('all');

  useEffect(() => {
    setTimeout(() => {
      setAnimeList(mediaData.filter(item => item.type === 'anime'));
      setLoading(false);
    }, 600);
  }, []);

  const filteredAnime = activeGenre === 'all' 
    ? animeList 
    : animeList.filter(anime => anime.genres.includes(activeGenre));

  const genres = ['all', 'Shonen', 'Shojo', 'Seinen', 'Mecha', 'Isekai', 'Slice of Life'];

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Anime</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-2 rounded-full capitalize ${activeGenre === genre ? 'bg-black text-white' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}
            >
              {genre}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
          <MediaGrid mediaList={filteredAnime} />
        )}
      </main>
    </div>
  );
};

export default Anime;