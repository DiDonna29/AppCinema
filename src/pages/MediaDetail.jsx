const MediaDetail = () => {
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simular carga de datos basado en ID de URL
    setTimeout(() => {
      const mockMedia = mediaData.find(item => item.id === 1); // Ejemplo con ID 1
      setMedia(mockMedia);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader />
      
      <main className="container mx-auto py-8 px-4">
        {media && <MediaDetails media={media} />}
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recomendaciones similares</h2>
          <MediaGrid 
            mediaList={mediaData
              .filter(item => item.type === media.type && item.id !== media.id)
              .slice(0, 5)} 
          />
        </div>
      </main>
    </div>
  );
};

export default MediaDetail;