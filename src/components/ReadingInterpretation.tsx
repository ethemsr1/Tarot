import React from 'react';
import { useCardContext } from '../context/CardContext';
import { Sparkles, Share2 } from 'lucide-react';

interface ReadingInterpretationProps {
  spread: string;
}

const ReadingInterpretation: React.FC<ReadingInterpretationProps> = ({ spread }) => {
  const { selectedCards, reversals } = useCardContext();
  const cards = useCardContext().cards;
  
  // Get the selected card objects
  const selectedCardObjects = selectedCards.map(id => 
    cards.find(card => card.id === id)
  ).filter(Boolean);
  
  // Generate interpretation based on spread type
  const generateInterpretation = () => {
    if (spread === 'singleCard') {
      return getSingleCardInterpretation();
    } else if (spread === 'threeCard') {
      return getThreeCardInterpretation();
    } else if (spread === 'celticCross') {
      return getCelticCrossInterpretation();
    }
    return '';
  };
  
  const getSingleCardInterpretation = () => {
    if (selectedCardObjects.length === 0) return '';
    
    const card = selectedCardObjects[0];
    const isReversed = reversals[0];
    
    if (!card) return '';
    
    return {
      title: 'Günlük Tarot Kartınız',
      sections: [
        {
          title: `${card.name} ${isReversed ? '(Ters)' : ''}`,
          content: isReversed ? card.interpretationReversed : card.interpretation,
          advice: getRandomAdvice(card.name, isReversed)
        }
      ]
    };
  };
  
  const getThreeCardInterpretation = () => {
    if (selectedCardObjects.length < 3) return '';
    
    return {
      title: 'Geçmiş, Şimdi ve Gelecek',
      sections: [
        {
          title: `Geçmiş: ${selectedCardObjects[0]?.name} ${reversals[0] ? '(Ters)' : ''}`,
          content: reversals[0] 
            ? selectedCardObjects[0]?.interpretationReversed 
            : selectedCardObjects[0]?.interpretation,
          advice: getRandomPastAdvice(selectedCardObjects[0]?.name || '', reversals[0])
        },
        {
          title: `Şimdi: ${selectedCardObjects[1]?.name} ${reversals[1] ? '(Ters)' : ''}`,
          content: reversals[1] 
            ? selectedCardObjects[1]?.interpretationReversed 
            : selectedCardObjects[1]?.interpretation,
          advice: getRandomPresentAdvice(selectedCardObjects[1]?.name || '', reversals[1])
        },
        {
          title: `Gelecek: ${selectedCardObjects[2]?.name} ${reversals[2] ? '(Ters)' : ''}`,
          content: reversals[2] 
            ? selectedCardObjects[2]?.interpretationReversed 
            : selectedCardObjects[2]?.interpretation,
          advice: getRandomFutureAdvice(selectedCardObjects[2]?.name || '', reversals[2])
        }
      ]
    };
  };
  
  const getCelticCrossInterpretation = () => {
    if (selectedCardObjects.length < 10) return '';
    
    return {
      title: 'Kelt Haçı Falı',
      sections: [
        {
          title: `1. Mevcut Durum: ${selectedCardObjects[0]?.name} ${reversals[0] ? '(Ters)' : ''}`,
          content: reversals[0] 
            ? selectedCardObjects[0]?.interpretationReversed 
            : selectedCardObjects[0]?.interpretation,
        },
        {
          title: `2. Zorluk: ${selectedCardObjects[1]?.name} ${reversals[1] ? '(Ters)' : ''}`,
          content: reversals[1] 
            ? selectedCardObjects[1]?.interpretationReversed 
            : selectedCardObjects[1]?.interpretation,
        },
        {
          title: `3. Temel: ${selectedCardObjects[2]?.name} ${reversals[2] ? '(Ters)' : ''}`,
          content: reversals[2] 
            ? selectedCardObjects[2]?.interpretationReversed 
            : selectedCardObjects[2]?.interpretation,
        },
        {
          title: `4. Geçmiş: ${selectedCardObjects[3]?.name} ${reversals[3] ? '(Ters)' : ''}`,
          content: reversals[3] 
            ? selectedCardObjects[3]?.interpretationReversed 
            : selectedCardObjects[3]?.interpretation,
        },
        {
          title: `5. Olası Sonuç: ${selectedCardObjects[4]?.name} ${reversals[4] ? '(Ters)' : ''}`,
          content: reversals[4] 
            ? selectedCardObjects[4]?.interpretationReversed 
            : selectedCardObjects[4]?.interpretation,
        },
        {
          title: `6. Yakın Gelecek: ${selectedCardObjects[5]?.name} ${reversals[5] ? '(Ters)' : ''}`,
          content: reversals[5] 
            ? selectedCardObjects[5]?.interpretationReversed 
            : selectedCardObjects[5]?.interpretation,
        },
        {
          title: `7. Etkilendiğiniz Faktörler: ${selectedCardObjects[6]?.name} ${reversals[6] ? '(Ters)' : ''}`,
          content: reversals[6] 
            ? selectedCardObjects[6]?.interpretationReversed 
            : selectedCardObjects[6]?.interpretation,
        },
        {
          title: `8. Dış Etkiler: ${selectedCardObjects[7]?.name} ${reversals[7] ? '(Ters)' : ''}`,
          content: reversals[7] 
            ? selectedCardObjects[7]?.interpretationReversed 
            : selectedCardObjects[7]?.interpretation,
        },
        {
          title: `9. Umutlar ve Korkular: ${selectedCardObjects[8]?.name} ${reversals[8] ? '(Ters)' : ''}`,
          content: reversals[8] 
            ? selectedCardObjects[8]?.interpretationReversed 
            : selectedCardObjects[8]?.interpretation,
        },
        {
          title: `10. Nihai Sonuç: ${selectedCardObjects[9]?.name} ${reversals[9] ? '(Ters)' : ''}`,
          content: reversals[9] 
            ? selectedCardObjects[9]?.interpretationReversed 
            : selectedCardObjects[9]?.interpretation,
        }
      ]
    };
  };
  
  const interpretation = generateInterpretation();
  
  if (!interpretation) return <div>Yükleniyor...</div>;
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-indigo-900/30 backdrop-blur-sm border border-purple-800/30 rounded-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-purple-200 flex items-center">
            <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
            {interpretation.title}
          </h2>
          
         
        </div>
        
        <div className="space-y-8">
          {interpretation.sections?.map((section, index) => (
            <div key={index} className="border-b border-purple-800/30 pb-6 last:border-b-0">
              <h3 className="text-xl font-serif font-medium text-purple-200 mb-3">
                {section.title}
              </h3>
              
              <p className="text-purple-200/90 mb-4 leading-relaxed">
                {section.content || "Bu kartın yorumuna göre, hayatınızda önemli değişiklikler olabilir. İçsel seslerinize kulak verin ve kalbinizin yolunu takip edin."}
              </p>
              
              {section.advice && (
                <div className="bg-purple-900/30 border border-purple-800/30 rounded-lg p-4 mt-3">
                  <h4 className="text-sm font-medium text-yellow-200 mb-2">Tavsiye:</h4>
                  <p className="text-sm text-purple-200/90 italic">{section.advice}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center text-sm text-purple-300/70">
          <p>
            Bu yorum, seçilen kartların enerjisine dayanarak yapay zeka tarafından oluşturulmuştur.
            Tarot falı sadece eğlence ve ilham amaçlıdır.
          </p>
        </div>
      </div>
    </div>
  );
};

// Random advice generator functions
const getRandomAdvice = (cardName: string, isReversed: boolean) => {
  const advices = [
    `${cardName} kartı size içsel gücünüzü hatırlatıyor. Kendinize güvenin ve ilerleyin.`,
    `Bu dönemde sezgilerinize güvenmeniz önemli. ${cardName} enerjisi, içsel bilgeliğinizi dinlemenizi öneriyor.`,
    `${cardName} kartının mesajı açık: Şu anda hayatınızdaki değişimlere direnmek yerine onlarla akın.`,
    `${isReversed ? 'Ters gelen' : ''} ${cardName} kartı, geçmiş deneyimlerinizden ders almanızı ve ilerlemenizi öneriyor.`
  ];
  
  return advices[Math.floor(Math.random() * advices.length)];
};

const getRandomPastAdvice = (cardName: string, isReversed: boolean) => {
  const advices = [
    `Geçmişte yaşadığınız ${cardName} enerjisi, bugünkü kararlarınızı etkilemeye devam ediyor.`,
    `${cardName} kartı geçmişte bırakmanız gereken bir enerjiyi gösteriyor. Artık ileriye bakma zamanı.`,
    `${isReversed ? 'Ters' : ''} ${cardName} kartı, geçmişteki bir dersin tam olarak öğrenilmediğini gösteriyor olabilir.`,
    `Geçmişinizdeki bu deneyim, gelecekte karşılaşacağınız zorluklara hazırlık olabilir.`
  ];
  
  return advices[Math.floor(Math.random() * advices.length)];
};

const getRandomPresentAdvice = (cardName: string, isReversed: boolean) => {
  const advices = [
    `Şu anda ${cardName} enerjisiyle çevrilisiniz. Bu enerjiyi bilinçli bir şekilde kullanın.`,
    `Mevcut durumda dikkatli olmalısınız. ${cardName} kartı, anlık kararlarınızın önemini vurguluyor.`,
    `${isReversed ? 'Ters' : ''} ${cardName} enerjisi şu an hayatınızda dengeyi bulmanızı öneriyor.`,
    `Şu anki durumunuzda sabırlı olun. Her şey zamanla netleşecek.`
  ];
  
  return advices[Math.floor(Math.random() * advices.length)];
};

const getRandomFutureAdvice = (cardName: string, isReversed: boolean) => {
  const advices = [
    `Gelecekte ${cardName} enerjisi size yeni fırsatlar getirecek. Hazırlıklı olun.`,
    `${cardName} kartı, yakın gelecekte önemli bir değişim olacağını gösteriyor.`,
    `${isReversed ? 'Ters' : ''} ${cardName} kartı, gelecekte karşılaşabileceğiniz zorlukları aşmak için şimdiden hazırlık yapmanızı öneriyor.`,
    `Yakın gelecekte, beklenmedik bir yardım alabilirsiniz. Fırsatlara açık olun.`
  ];
  
  return advices[Math.floor(Math.random() * advices.length)];
};

export default ReadingInterpretation;