const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setMovies(mediaData.filter(item => item.type === 'movie'));
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Películas</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
          <>
            <MediaGrid mediaList={movies} />
            <div className="mt-8 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white">Anterior</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-black text-white">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white">Siguiente</button>
              </nav>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Movies;