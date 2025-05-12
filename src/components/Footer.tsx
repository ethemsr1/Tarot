import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950/80 backdrop-blur-md border-t border-purple-800/50 py-6 relative z-10">
      <style>
        {`
          .iesmedia {
            font-size: 1.1rem;
            font-weight: bold;
            text-decoration: none;
            animation: renkDegistir 4s infinite linear;
            transition: transform 0.3s ease;
          }
          @keyframes renkDegistir {
            0%   { color: rgb(255, 0, 102); text-shadow: 0 0 10px rgb(255, 0, 102); }
            25%  { color: rgb(0, 153, 255); text-shadow: 0 0 10px rgb(0, 153, 255); }
            50%  { color: rgb(0, 255, 128); text-shadow: 0 0 10px rgb(0, 255, 128); }
            75%  { color: rgb(255, 255, 0); text-shadow: 0 0 10px rgb(255, 255, 0); }
            100% { color: rgb(255, 0, 102); text-shadow: 0 0 10px rgb(255, 0, 102); }
          }
          .iesmedia:hover {
            transform: scale(1.1);
          }
        `}
      </style>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-purple-300 flex items-center justify-center">
        <p className="mt-2 text-sm">
          &copy; 2025 Tarot |{' '}
          <a
            href="https://webiees.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="iesmedia"
          >
            I. E. S.
          </a>
        </p>
          <Heart className="h-4 w-4 mx-1 text-red-400 inline" fill="currentColor" />
        </p>
        <p className="text-xs text-purple-400/70 mt-2">
          Tarot falı sadece eğlence amaçlıdır ve gerçek hayat kararlarınızı etkilememelidir.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
