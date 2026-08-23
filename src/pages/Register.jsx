const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Únete a CineVerse</h1>
          <p className="text-gray-600">Crea tu cuenta para guardar tus favoritos</p>
        </div>
        
        <AuthRegisterForm />
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">¿Ya tienes cuenta? <a href="/login" className="text-black font-semibold hover:underline">Inicia sesión aquí</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;


// DONE