const AdminUserList = ({ users }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Usuarios Registrados</h3>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-4 gap-4 font-semibold text-gray-700 mb-2">
          <div>Usuario</div>
          <div>Email</div>
          <div>Rol</div>
          <div>Acciones</div>
        </div>
        
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-4 gap-4 items-center py-2 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{user.name}</span>
            </div>
            <div>{user.email}</div>
            <div>
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                {user.isAdmin ? 'Admin' : 'Usuario'}
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 text-gray-500 hover:text-blue-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
              <button className="p-1 text-gray-500 hover:text-red-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserList;