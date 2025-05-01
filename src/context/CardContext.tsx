import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { tarotCards } from '../data/cards';

interface Card {
  id: number;
  name: string;
  suit: string;
  image: string;
  interpretation: string;
  interpretationReversed: string;
}

interface CardContextType {
  cards: Card[];
  selectedCards: number[];
  reversals: boolean[];
  setSelectedCards: (cards: number[]) => void;
  setReversals: (reversals: boolean[]) => void;
  shuffleCards: () => void;
  resetCards: () => void;
  getRandomReversals: (count: number) => boolean[];
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>(tarotCards);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [reversals, setReversals] = useState<boolean[]>([]);

  const shuffleCards = useCallback(() => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const resetCards = useCallback(() => {
    setSelectedCards([]);
    setReversals([]);
    shuffleCards();
  }, [shuffleCards]);

  const getRandomReversals = useCallback((count: number) => {
    return Array(count)
      .fill(false)
      .map(() => Math.random() > 0.7); // 30% chance of reversal
  }, []);

  // Shuffle cards on initial load
  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  return (
    <CardContext.Provider
      value={{
        cards,
        selectedCards,
        reversals,
        setSelectedCards,
        setReversals,
        shuffleCards,
        resetCards,
        getRandomReversals,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
