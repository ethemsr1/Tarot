import React from 'react';
import { Sparkles, Star, Scroll, MoonStar } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="py-8 md:py-16 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-yellow-200 to-purple-300 mb-6">
          Tarot
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
          Kadim kartların bilgeliğiyle geleceğinize ışık tutun.
        </p>
        
        <button 
          onClick={() => setCurrentPage('reading')}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
        >
          Hemen Fal Baktır
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <FeatureCard 
          icon={<Sparkles className="h-8 w-8 text-purple-300" />}
          title="Kişiselleştirilmiş Okumalar"
          description="Yapay zeka destekli yorumlar ile size özel tarot okumaları alın."
        />
        <FeatureCard 
          icon={<Star className="h-8 w-8 text-yellow-300" />}
          title="Farklı Dizilimler"
          description="Tek kart, üç kart veya Kelt Haçı gibi farklı tarot dizilimleri ile detaylı yorumlar."
        />
        <FeatureCard 
          icon={<Scroll className="h-8 w-8 text-blue-300" />}
          title="Detaylı Analizler"
          description="Her kartın anlamını ve size özel yorumunu detaylı olarak öğrenin."
        />
      </div>
      
      <div className="mt-20 max-w-3xl text-center p-8 border border-purple-800/30 rounded-xl bg-purple-900/20 backdrop-blur-sm">
        <MoonStar className="h-12 w-12 text-yellow-200 mx-auto mb-6" />
        <h2 className="text-2xl font-serif font-bold text-purple-200 mb-4">
          Tarot Nedir?
        </h2>
        <p className="text-purple-200/90 leading-relaxed">
          Tarot, yüzyıllardır kullanılan ve içgörü kazanmak için kullanılan bir kartlar sistemidir. 
          Her kart, yaşamın farklı yönlerini ve enerji akışlarını temsil eder. 
          Tarot falı baktırmak, kendimizi daha iyi anlamak, gizli kalmış duyguları keşfetmek 
          ve potansiyel gelecek yolları hakkında fikir sahibi olmak için güçlü bir araçtır.
        </p>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-indigo-900/30 border border-purple-800/30 backdrop-blur-sm hover:bg-indigo-900/40 transition-colors duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-semibold text-purple-200 mb-2">{title}</h3>
      <p className="text-purple-300/80">{description}</p>
    </div>
  );
};

export default HomePage;