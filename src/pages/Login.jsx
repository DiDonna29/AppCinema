const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenido a CineVerse</h1>
          <p className="text-gray-600">Inicia sesión para acceder a tu cuenta</p>
        </div>
        
        <AuthLoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">¿No tienes cuenta? <a href="/register" className="text-black font-semibold hover:underline">Regístrate aquí</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;