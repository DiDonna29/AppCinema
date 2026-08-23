const AdminUserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-semibold">{user.name}</h4>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
          {user.isAdmin ? 'Admin' : 'Usuario'}
        </span>
        
        <button className="p-2 text-gray-500 hover:text-black">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminUserCard;