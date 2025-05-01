export interface SpreadDefinition {
  id: string;
  name: string;
  description: string;
  positions: Position[];
}

interface Position {
  id: number;
  name: string;
  description: string;
}

export const tarotSpreads: SpreadDefinition[] = [
  {
    id: 'singleCard',
    name: 'Tek Kart',
    description: 'Günlük rehberlik veya belirli bir soruya hızlı cevap için tek kart çekilir.',
    positions: [
      {
        id: 1,
        name: 'Günün Mesajı',
        description: 'Bu kart, gününüz için genel bir enerji veya mesaj sunar.'
      }
    ]
  },
  {
    id: 'threeCard',
    name: 'Üç Kart',
    description: 'Geçmiş, şimdi ve geleceği temsil eden üç kart çekilir. Durumun akışını gösterir.',
    positions: [
      {
        id: 1,
        name: 'Geçmiş',
        description: 'Bu kart, mevcut durumunuzu etkileyen geçmiş etkileri temsil eder.'
      },
      {
        id: 2,
        name: 'Şimdi',
        description: 'Bu kart, şu anda yaşadığınız enerjiyi ve durumu temsil eder.'
      },
      {
        id: 3,
        name: 'Gelecek',
        description: 'Bu kart, mevcut yolunuzda devam ederseniz ortaya çıkacak olası enerjiyi gösterir.'
      }
    ]
  },
  {
    id: 'celticCross',
    name: 'Kelt Haçı',
    description: 'Detaylı bir okuma için 10 kartlık karmaşık bir dizilim. Sorunun her yönünü inceler.',
    positions: [
      {
        id: 1,
        name: 'Mevcut Durum',
        description: 'Bu kart, genel durumunuzu ve sizi etkileyen mevcut enerjiyi temsil eder.'
      },
      {
        id: 2,
        name: 'Zorluk',
        description: 'Bu kart, mevcut durumunuzu çaprazlayan engelleri veya zorlukları gösterir.'
      },
      {
        id: 3,
        name: 'Temel',
        description: 'Bu kart, bilinçaltı etkileri ve durumun temelindeki faktörleri gösterir.'
      },
      {
        id: 4,
        name: 'Geçmiş',
        description: 'Bu kart, yakın geçmişten gelen ve artık geçmekte olan etkileri gösterir.'
      },
      {
        id: 5,
        name: 'Olası Sonuç',
        description: 'Bu kart, mevcut yolunuzda devam ederseniz olabilecek en iyi sonucu gösterir.'
      },
      {
        id: 6,
        name: 'Yakın Gelecek',
        description: 'Bu kart, yakın gelecekte karşılaşacağınız enerjiyi veya durumları gösterir.'
      },
      {
        id: 7,
        name: 'Kendiniz',
        description: 'Bu kart, durumla ilgili kendi düşünce ve tutumlarınızı gösterir.'
      },
      {
        id: 8,
        name: 'Dış Etkiler',
        description: 'Bu kart, başkalarının sizi nasıl etkilediğini ve dış faktörleri gösterir.'
      },
      {
        id: 9,
        name: 'Umutlar veya Korkular',
        description: 'Bu kart, bilinçli veya bilinçaltı umut ve endişelerinizi gösterir.'
      },
      {
        id: 10,
        name: 'Nihai Sonuç',
        description: 'Bu kart, eğer diğer kartların gösterdiği yolda ilerlerseniz durumun nihai sonucunu gösterir.'
      }
    ]
  }
];