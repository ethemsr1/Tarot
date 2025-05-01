import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import SpreadSelector from '../components/SpreadSelector';
import CardSpread from '../components/CardSpread';
import ReadingInterpretation from '../components/ReadingInterpretation';
import { useCardContext } from '../context/CardContext';

interface ReadingPageProps {
  setCurrentPage: (page: string) => void;
}

const ReadingPage: React.FC<ReadingPageProps> = () => {
  const [selectedSpread, setSelectedSpread] = useState('threeCard');
  const [isReadingComplete, setIsReadingComplete] = useState(false);
  const { resetCards } = useCardContext();

  const handleSpreadChange = (spread: string) => {
    resetCards();
    setSelectedSpread(spread);
    setIsReadingComplete(false);
  };

  const handleReadingComplete = () => {
    setIsReadingComplete(true);
  };

  const handleReset = () => {
    resetCards();
    setIsReadingComplete(false);
  };

  return (
    <div className="py-6 md:py-10 animate-fade-in">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-4">
          Tarot Falı
        </h1>
        <p className="text-lg text-purple-200/80">
          Bir deste kart seçin ve geleceğinizin sırlarını keşfedin
        </p>
      </div>

      {!isReadingComplete ? (
        <>
          <SpreadSelector 
            selectedSpread={selectedSpread} 
            onSelectSpread={handleSpreadChange} 
          />
          
          <CardSpread 
            spread={selectedSpread}
            onReadingComplete={handleReadingComplete}
          />
        </>
      ) : (
        <>
          <ReadingInterpretation spread={selectedSpread} />
          
          <div className="mt-12 text-center">
            <button
              onClick={handleReset}
              className="flex items-center mx-auto bg-indigo-700 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              <RefreshCw className="h-5 w-5 mr-2" />
              Yeni Fal Bak
            </button>
          </div>
        </>
      )}
      
      <div className="mt-16 text-center max-w-xl mx-auto p-6 border border-purple-800/30 rounded-lg bg-indigo-900/20">
        <Sparkles className="h-6 w-6 text-yellow-300 mx-auto mb-3" />
        <p className="text-purple-200/70 text-sm italic">
  Unutmayın ki kendi kaderinizi şekillendiren sizin seçimlerinizdir.
        </p>
      </div>
    </div>
  );
};

export default ReadingPage;