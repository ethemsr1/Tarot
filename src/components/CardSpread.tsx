import React, { useState, useEffect } from 'react';
import CardDeck from './CardDeck';
import SpreadLayout from './SpreadLayout';
import { useCardContext } from '../context/CardContext';

interface CardSpreadProps {
  spread: string;
  onReadingComplete: () => void;
}

const CardSpread: React.FC<CardSpreadProps> = ({ spread, onReadingComplete }) => {
  const { selectedCards, setSelectedCards, shuffleCards, getRandomReversals, setReversals } = useCardContext();
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [isSelectionComplete, setIsSelectionComplete] = useState(false);

  const getRequiredCards = () => {
    switch (spread) {
      case 'singleCard': return 1;
      case 'threeCard': return 3;
      case 'celticCross': return 10;
      default: return 3;
    }
  };

  const requiredCards = getRequiredCards();

  useEffect(() => {
    const newReversals = getRandomReversals(requiredCards);
    setReversals(newReversals);
    setSelectedCards([]);  // Spread değiştiğinde seçimleri temizle
    setRevealedCards([]);
    setIsSelectionComplete(false);
  }, [spread, getRandomReversals, setReversals, setSelectedCards]);

  const handleCardSelect = (cardId: number) => {
    setSelectedCards(prev => {
      if (prev.includes(cardId)) {
        return prev.filter(id => id !== cardId);
      } else if (prev.length < requiredCards) {
        return [...prev, cardId];
      }
      return prev;
    });
  };

  const handleCompleteSelection = () => {
    setIsSelectionComplete(true);
    revealCardsSequentially([...selectedCards]);  // Sabit kopya ver
  };

  const revealCardsSequentially = (cardsToReveal: number[]) => {
    cardsToReveal.forEach((cardId, index) => {
      setTimeout(() => {
        setRevealedCards(prev => [...prev, cardId]);

        if (index === cardsToReveal.length - 1) {
          setTimeout(onReadingComplete, 1500);
        }
      }, 800 * (index + 1));
    });
  };

  return (
    <div className="mt-6">
      {!isSelectionComplete ? (
        <>
          <div className="mb-8 text-center">
            <h3 className="text-xl font-serif text-purple-200 mb-3">
              Desteden {requiredCards} Kart Seçin
            </h3>
            <p className="text-purple-300/70">
              Sezgilerinizi dinleyin ve sizi çeken kartları seçin.
            </p>
          </div>

          <CardDeck 
            onCardSelect={handleCardSelect} 
            selectedCards={selectedCards} 
            maxSelections={requiredCards} 
          />

          <div className="mt-8 text-center">
            <button
              onClick={shuffleCards}
              className="bg-indigo-900/60 hover:bg-indigo-800/60 text-white px-4 py-2 rounded-md mr-4"
            >
              Kartları Karıştır
            </button>

            <button
              onClick={handleCompleteSelection}
              disabled={selectedCards.length !== requiredCards}
              className={`bg-purple-700 text-white px-6 py-2 rounded-md transition-colors
                ${selectedCards.length !== requiredCards 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-purple-600'}`
              }
            >
              Falı Başlat
            </button>
          </div>
        </>
      ) : (
        <SpreadLayout 
          spread={spread}
          selectedCards={selectedCards}
          revealedCards={revealedCards}
        />
      )}
    </div>
  );
};

export default CardSpread;
