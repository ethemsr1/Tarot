import React from 'react';
import { MoonStar } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-indigo-950/80 backdrop-blur-md shadow-lg py-4 sticky top-0 z-20 border-b border-purple-800/50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <MoonStar className="h-8 w-8 text-purple-300 mr-3" />
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-yellow-200">
            Tarot
          </h1>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li className="hidden md:block">
              <button 
                onClick={() => setCurrentPage('home')}
                className="font-medium hover:text-purple-300 transition-colors"
              >
                Ana Sayfa
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('reading')}
                className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Fal Bak
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;