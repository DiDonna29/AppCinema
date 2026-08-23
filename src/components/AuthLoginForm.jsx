const AuthLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Ingresar
        </button>
        
        <div className="text-center">
          <a href="#" className="text-sm text-gray-500 hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-700">¿No tienes cuenta? <a href="#" className="text-black font-semibold hover:underline">Regístrate</a></p>
      </div>
    </div>
  );
};

export default AuthLoginForm;