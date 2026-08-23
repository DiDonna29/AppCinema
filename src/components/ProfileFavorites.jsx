const ProfileFavorites = ({ favorites }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Mis Favoritos</h3>
      
      {favorites.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500 mb-4">Aún no has agregado nada a favoritos</p>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Explorar Películas
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="relative group">
              <img 
                src={favorite.image} 
                alt={favorite.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity">
                <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileFavorites;