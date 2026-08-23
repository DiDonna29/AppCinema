const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setSeries(mediaData.filter(item => item.type === 'series'));
      setLoading(false);
    }, 800);
  }, []);

  const filteredSeries = series.filter(serie =>
    serie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader />
      
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Series</h1>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
          <>
            {filteredSeries.length > 0 ? (
              <>
                <MediaGrid mediaList={filteredSeries} />
                <div className="mt-8 flex justify-center">
                  <nav className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition">
                      Anterior
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg bg-black text-white">1</button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition">
                      2
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition">
                      3
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition">
                      Siguiente
                    </button>
                  </nav>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No se encontraron series con ese nombre</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Mostrar todas
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Series;