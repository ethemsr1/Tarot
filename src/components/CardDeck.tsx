import React, { useState } from 'react';
import Card from './Card';
import { useCardContext } from '../context/CardContext';

interface CardDeckProps {
  onCardSelect: (cardId: number) => void;
  selectedCards: number[];
  maxSelections: number;
}

const CardDeck: React.FC<CardDeckProps> = ({ onCardSelect, selectedCards, maxSelections }) => {
  const [deckIndex, setDeckIndex] = useState(0);
  const { cards } = useCardContext();
  const cardsPerPage = 12;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  
  const handleCardSelect = (id: number) => {
    if (selectedCards.length < maxSelections || selectedCards.includes(id)) {
      onCardSelect(id);
    }
  };

  const nextPage = () => {
    setDeckIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDeckIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCards = cards.slice(
    deckIndex * cardsPerPage,
    (deckIndex + 1) * cardsPerPage
  );

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevPage}
          className="bg-indigo-900/60 hover:bg-indigo-800/60 text-white px-4 py-2 rounded-md"
        >
          ← Önceki
        </button>
        <span className="text-purple-300">
          Sayfa {deckIndex + 1} / {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="bg-indigo-900/60 hover:bg-indigo-800/60 text-white px-4 py-2 rounded-md"
        >
          Sonraki →
        </button>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {visibleCards.map((card) => (
          <div key={card.id} className="flex justify-center">
            <Card
              id={card.id}
              isSelectable={selectedCards.length < maxSelections || selectedCards.includes(card.id)}
              isSelected={selectedCards.includes(card.id)}
              onSelect={handleCardSelect}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-purple-300">
        <p>
          {selectedCards.length} / {maxSelections} kart seçildi
        </p>
      </div>
    </div>
  );
};

export default CardDeck;