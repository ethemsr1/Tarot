import React from 'react';
import { CircleDot, LayoutGrid, CircleDashed } from 'lucide-react';

interface SpreadSelectorProps {
  selectedSpread: string;
  onSelectSpread: (spread: string) => void;
}

const SpreadSelector: React.FC<SpreadSelectorProps> = ({ selectedSpread, onSelectSpread }) => {
  const spreads = [
    { id: 'singleCard', name: 'Tek Kart', icon: <CircleDot className="h-5 w-5" /> },
    { id: 'threeCard', name: 'Üç Kart', icon: <LayoutGrid className="h-5 w-5" /> },
    { id: 'celticCross', name: 'Kelt Haçı', icon: <CircleDashed className="h-5 w-5" /> }
  ];

  return (
    <div className="mb-10">
      <h2 className="text-xl font-serif font-semibold text-purple-200 mb-4 text-center">
        Fal Dizilimini Seçin
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {spreads.map((spread) => (
          <button
            key={spread.id}
            onClick={() => onSelectSpread(spread.id)}
            className={`flex items-center py-2 px-4 rounded-full border transition-all ${
              selectedSpread === spread.id
                ? 'bg-purple-700 border-purple-500 text-white'
                : 'bg-indigo-900/30 border-purple-800/30 text-purple-300 hover:bg-indigo-800/40'
            }`}
          >
            <span className="mr-2">{spread.icon}</span>
            {spread.name}
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-center text-purple-300/70">
        {selectedSpread === 'singleCard' && (
          <p>Basit, hızlı bir okuma için tek kart seçin.</p>
        )}
        {selectedSpread === 'threeCard' && (
          <p>Geçmiş, şimdi ve geleceği temsil eden üç kart seçin.</p>
        )}
        {selectedSpread === 'celticCross' && (
          <p>Detaylı bir okuma için on kartlık Kelt Haçı dizilimini seçin.</p>
        )}
      </div>
    </div>
  );
};

export default SpreadSelector;