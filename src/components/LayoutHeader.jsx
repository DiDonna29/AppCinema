import { useState } from 'react';
import Link from 'next/link';

const LayoutHeader = ({ currentUser, activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold" onClick={() => handlePageChange('home')}>CineVerse</a>
        </Link>
        
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0`}>
          <Link href="/movies">
            <a 
              className={`px-4 py-2 hover:text-yellow-400 transition ${activePage === 'movies' ? 'text-yellow-400' : ''}`}
              onClick={() => handlePageChange('movies')}
            >
              Películas
            </a>
          </Link>
          <Link href="/series">
            <a 
              className={`px-4 py-2 hover:text-yellow-400 transition ${activePage === 'series' ? 'text-yellow-400' : ''}`}
              onClick={() => handlePageChange('series')}
            >
              Series
            </a>
          </Link>
          <Link href="/anime">
            <a 
              className={`px-4 py-2 hover:text-yellow-400 transition ${activePage === 'anime' ? 'text-yellow-400' : ''}`}
              onClick={() => handlePageChange('anime')}
            >
              Anime
            </a>
          </Link>
          {currentUser && (
            <Link href="/favorites">
              <a 
                className={`px-4 py-2 hover:text-yellow-400 transition ${activePage === 'favorites' ? 'text-yellow-400' : ''}`}
                onClick={() => handlePageChange('favorites')}
              >
                Favoritos
              </a>
            </Link>
          )}
          <div className="border-t md:border-t-0 border-gray-700 mt-2 md:mt-0 pt-2 md:pt-0">
            {currentUser ? (
              <Link href="/profile">
                <a 
                  className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition"
                  onClick={() => handlePageChange('profile')}
                >
                  Mi Perfil
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a 
                  className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition"
                  onClick={() => handlePageChange('login')}
                >
                  Iniciar Sesión
                </a>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;


// DONE