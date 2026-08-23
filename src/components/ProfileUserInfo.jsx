const ProfileUserInfo = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          
          <div className="mt-4 flex justify-center md:justify-start space-x-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">20 Favoritos</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Miembro desde {user.joinDate}</span>
          </div>
        </div>
        
        <button className="px-4 py-2 border border-black rounded-lg hover:bg-gray-100 transition-colors">
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileUserInfo;