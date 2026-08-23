const AdminUserDetails = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <label className="inline-flex items-center">
                <input 
                  type="checkbox" 
                  checked={user.isAdmin}
                  onChange={() => {}}
                  className="form-checkbox h-4 w-4 text-black transition duration-150 ease-in-out"
                />
                <span className="ml-2">Administrador</span>
              </label>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Fecha de Registro</p>
              <p>{user.joinDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Último Acceso</p>
              <p>Hace 2 días</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Estado</p>
              <p className="text-green-500">Activo</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold mb-4">Favoritos del usuario</h4>
        
        {user.favorites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {user.favorites.map((favorite) => (
              <div key={favorite.id} className="border rounded-lg overflow-hidden">
                <img 
                  src={favorite.image} 
                  alt={favorite.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h5 className="font-medium text-sm truncate">{favorite.title}</h5>
                  <p className="text-xs text-gray-600">{favorite.rating}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Este usuario no tiene favoritos aún</p>
        )}
      </div>
    </div>
  );
};

export default AdminUserDetails;