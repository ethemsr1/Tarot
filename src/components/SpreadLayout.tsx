import React from 'react';
import Card from './Card';

interface SpreadLayoutProps {
  spread: string;
  selectedCards: number[];
  revealedCards: number[];
  reversals: boolean[];
}

const SpreadLayout: React.FC<SpreadLayoutProps> = ({
  spread,
  selectedCards = [],
  revealedCards = [],
  reversals = [],
}) => {
  const isRevealed = (id: number) => revealedCards?.includes(id);
  const getReversal = (index: number) =>
    reversals && reversals.length > index ? reversals[index] : false;

  const renderSingleCard = () => (
    <div className="flex justify-center items-center h-64 md:h-80">
      {selectedCards.length > 0 && (
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Card
            id={selectedCards[0]}
            isRevealed={isRevealed(selectedCards[0])}
            reversed={getReversal(0)}
          />
        </div>
      )}
    </div>
  );

  const renderThreeCards = () => (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-4 md:gap-6 py-10">
      {selectedCards.map((cardId, index) => (
        <div
          key={cardId}
          className={`relative transform hover:scale-105 transition-transform duration-300
            ${index === 0 ? 'md:-rotate-12 md:-translate-y-4' : ''}
            ${index === 2 ? 'md:rotate-12 md:-translate-y-4' : ''}`}
        >
          <Card
            id={cardId}
            position={index}
            isRevealed={isRevealed(cardId)}
            reversed={getReversal(index)}
          />
          <div className="absolute -bottom-8 left-0 right-0 text-center text-sm text-purple-300">
            {index === 0 && 'Geçmiş'}
            {index === 1 && 'Şimdi'}
            {index === 2 && 'Gelecek'}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCelticCross = () => (
    <div className="relative h-[450px] md:h-[600px] flex justify-center items-center">
      <div className="relative w-full max-w-2xl h-full">
        {selectedCards.length > 0 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Card
              id={selectedCards[0]}
              isRevealed={isRevealed(selectedCards[0])}
              reversed={getReversal(0)}
            />
          </div>
        )}
        {selectedCards.length > 1 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
            <Card
              id={selectedCards[1]}
              isRevealed={isRevealed(selectedCards[1])}
              reversed={getReversal(1)}
            />
          </div>
        )}
        {selectedCards.length > 2 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Card
              id={selectedCards[2]}
              isRevealed={isRevealed(selectedCards[2])}
              reversed={getReversal(2)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Temel
            </div>
          </div>
        )}
        {selectedCards.length > 3 && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2">
            <Card
              id={selectedCards[3]}
              isRevealed={isRevealed(selectedCards[3])}
              reversed={getReversal(3)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Hedef
            </div>
          </div>
        )}
        {selectedCards.length > 4 && (
          <div className="absolute top-1/2 right-10 -translate-y-1/2">
            <Card
              id={selectedCards[4]}
              isRevealed={isRevealed(selectedCards[4])}
              reversed={getReversal(4)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Yakın Gelecek
            </div>
          </div>
        )}
        {selectedCards.length > 5 && (
          <div className="absolute top-1/2 left-10 -translate-y-1/2">
            <Card
              id={selectedCards[5]}
              isRevealed={isRevealed(selectedCards[5])}
              reversed={getReversal(5)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Yakın Geçmiş
            </div>
          </div>
        )}
        {selectedCards.length > 6 && (
          <div className="absolute bottom-40 right-0 md:right-20">
            <Card
              id={selectedCards[6]}
              isRevealed={isRevealed(selectedCards[6])}
              reversed={getReversal(6)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Sizin Bakış Açınız
            </div>
          </div>
        )}
        {selectedCards.length > 7 && (
          <div className="absolute bottom-[220px] right-0 md:right-20">
            <Card
              id={selectedCards[7]}
              isRevealed={isRevealed(selectedCards[7])}
              reversed={getReversal(7)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Dış Etkiler
            </div>
          </div>
        )}
        {selectedCards.length > 8 && (
          <div className="absolute bottom-[340px] right-0 md:right-20">
            <Card
              id={selectedCards[8]}
              isRevealed={isRevealed(selectedCards[8])}
              reversed={getReversal(8)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Umutlar ve Korkular
            </div>
          </div>
        )}
        {selectedCards.length > 9 && (
          <div className="absolute top-10 right-0 md:right-20">
            <Card
              id={selectedCards[9]}
              isRevealed={isRevealed(selectedCards[9])}
              reversed={getReversal(9)}
            />
            <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-purple-300">
              Nihai Sonuç
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="mt-12">
      <h2 className="text-xl font-serif text-center text-purple-200 mb-6">
        {spread === 'singleCard' && 'Günlük Tarot Kartınız'}
        {spread === 'threeCard' && 'Geçmiş, Şimdi ve Gelecek'}
        {spread === 'celticCross' && 'Kelt Haçı Falı'}
      </h2>

      <div className="max-w-4xl mx-auto">
        {spread === 'singleCard' && renderSingleCard()}
        {spread === 'threeCard' && renderThreeCards()}
        {spread === 'celticCross' && renderCelticCross()}
      </div>

      <div className="mt-6 text-center text-sm text-purple-300/70">
        <p>Kartlar açılıyor, lütfen bekleyin...</p>
      </div>
    </div>
  );
};

export default SpreadLayout;
