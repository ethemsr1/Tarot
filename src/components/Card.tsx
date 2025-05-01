import React, { useState } from 'react';
import { useCardContext } from '../context/CardContext';

interface CardProps {
  id: number;
  position?: number;
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: (id: number) => void;
  isRevealed?: boolean;
  reversed?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  id, 
  position, 
  isSelectable = false, 
  isSelected = false,
  onSelect,
  isRevealed = false,
  reversed = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { cards } = useCardContext();
  const card = cards.find(c => c.id === id);

  if (!card) return null;

  const handleClick = () => {
    if (isSelectable && onSelect) {
      onSelect(id);
    }
  };

  const cardFrontStyles = `
    ${isRevealed ? 'opacity-100' : 'opacity-0'} 
    ${reversed ? 'rotate-180' : ''}
    absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-800 to-purple-900 flex items-center justify-center
    transition-all duration-700 backface-visibility-hidden
    border-2 border-purple-400/30
  `;

  const cardBackStyles = `
    ${isRevealed ? 'opacity-0' : 'opacity-100'} 
    absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-900 to-purple-950
    transition-all duration-700 backface-visibility-hidden
    flex items-center justify-center
    border-2 border-purple-500/30
  `;

  // 💡 DİKKAT: tarotCards içinde image: "/images/fool.jpg" olacak!
  const cardImageUrl = card.image; 

  return (
    <div 
      className={`
        relative w-24 md:w-32 h-36 md:h-48 
        perspective-1000 
        ${isSelectable ? 'cursor-pointer transform transition-transform duration-300' : ''}
        ${isSelectable && isHovered ? 'translate-y-[-10px]' : ''}
        ${isSelected ? 'ring-2 ring-yellow-400 ring-opacity-70' : ''}
        ${position !== undefined ? `card-position-${position}` : ''}
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d">
        <div className={cardFrontStyles}>
          <img 
            src={cardImageUrl} 
            alt={card.name} 
            className="w-full h-full object-cover rounded-lg opacity-90"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-lg">
            <p className="text-xs text-center font-medium text-white">{card.name}</p>
          </div>
        </div>
        
        <div className={cardBackStyles}>
          <div className="w-full h-full rounded-lg bg-indigo-900 bg-opacity-80 flex items-center justify-center">
            <div className="w-5/6 h-5/6 border-2 border-purple-500/50 rounded-lg flex items-center justify-center">
              <div className="text-purple-300 text-2xl font-serif">✦</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
