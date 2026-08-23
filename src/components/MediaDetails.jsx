const MediaDetails = ({ media }) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={media.image} 
            alt={media.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold mb-2">{media.title} <span className="text-gray-500">({media.year})</span></h1>
            <div className="flex items-center bg-black text-white px-3 py-1 rounded-full">
              <span className="mr                  <span>{media.rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 my-4">
            {media.genres.map((genre, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{genre}</span>
            ))}
          </div>
          
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Sinopsis</h2>
            <p className="text-gray-700">{media.synopsis}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold mb-1">Duración</h3>
              <p>{media.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Director</h3>
              <p>{media.director}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Reparto</h3>
              <p className="line-clamp-3">{media.cast.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Clasificación</h3>
              <p>{media.rating}</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Ver Ahora
            </button>
            <button className="p-3 border border-black rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;