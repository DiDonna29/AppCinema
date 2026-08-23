import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LayoutHeader from '../components/LayoutHeader';
import MediaSearchBar from '../components/MediaSearchBar';
import MediaFilter from '../components/MediaFilter';
import MediaGrid from '../components/MediaGrid';
import mediaData from '../mock/media';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [activePage, setActivePage] = useState('home');

  const filteredMedia = mediaData.filter(media => {
    const matchesFilter = activeFilter === 'all' || media.type === activeFilter;
    const matchesSearch = media.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>CineVerse - Tu plataforma de películas</title>
        <meta name="description" content="Descubre las mejores películas, series y anime" />
      </Head>

      <LayoutHeader 
        currentUser={currentUser}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Descubre tu próximo título favorito</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia colección de películas, series y anime
          </p>
          
          <MediaSearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        
        <MediaFilter 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        
        <MediaGrid mediaList={filteredMedia.slice(0, 10)} />
        
        <div className="text-center mt-8">
          <button className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition-colors">
            Ver más
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;

