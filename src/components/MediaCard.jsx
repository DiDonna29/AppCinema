const MediaCard = ({ media }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative pb-2/3 h-64">
        <img 
          src={media.image} 
          alt={media.title} 
          className="absolute h-full w-full object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg truncate">{media.title}</h3>
          <div className="px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
            {media.rating}
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-1">{media.year} • {media.genre}</p>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{media.description}</p>
        <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm w-full hover:bg-gray-800 transition-colors">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default MediaCard;