import React, { useState } from 'react';
import { MoonStar } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReadingPage from './pages/ReadingPage';
import { CardProvider } from './context/CardContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CardProvider>
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 text-gray-100 flex flex-col">
        <div className="fixed w-full h-full top-0 left-0 pointer-events-none z-0 overflow-hidden">
          <div className="stars absolute w-full h-full"></div>
          <MoonStar className="absolute text-yellow-200 opacity-20 top-10 right-10 w-16 h-16" />
        </div>
        
        <Header setCurrentPage={setCurrentPage} />
        
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          {currentPage === 'home' ? (
            <HomePage setCurrentPage={setCurrentPage} />
          ) : (
            <ReadingPage setCurrentPage={setCurrentPage} />
          )}
        </main>
        
        <Footer />
      </div>
    </CardProvider>
  );
}

export default App;