/**
 * CENTRAL LOCAL CROP IMAGE MAPPING
 * Explicit, controlled local image mapping pointing to static local assets in public/crops/.
 * No external remote URL dependencies or dynamic search fallbacks.
 */

export const cropImages: Record<string, string> = {
  rice: '/crops/rice.jpg',
  wheat: '/crops/wheat.jpg',
  maize: '/crops/maize.jpg',
  chickpea: '/crops/chickpea.jpg',
  kidneybeans: '/crops/kidney-beans.jpg',
  pigeonpeas: '/crops/pigeon-peas.jpg',
  mothbeans: '/crops/moth-beans.jpg',
  mungbean: '/crops/mung-bean.jpg',
  blackgram: '/crops/blackgram.jpg',
  lentil: '/crops/lentil.jpg',
  pomegranate: '/crops/pomegranate.jpg',
  banana: '/crops/banana.jpg',
  mango: '/crops/mango.jpg',
  grapes: '/crops/grapes.jpg',
  watermelon: '/crops/watermelon.jpg',
  muskmelon: '/crops/muskmelon.jpg',
  apple: '/crops/apple.jpg',
  orange: '/crops/orange.jpg',
  papaya: '/crops/papaya.jpg',
  coconut: '/crops/coconut.jpg',
  cotton: '/crops/cotton.jpg',
  jute: '/crops/jute.jpg',
  coffee: '/crops/coffee.jpg',
};

/**
 * Helper to retrieve crop image by ID or name safely
 */
export function getCropImage(cropIdOrName: string): string {
  if (!cropIdOrName) return cropImages.rice;
  
  const cleanKey = cropIdOrName.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Exact or normalized key matching
  if (cropImages[cleanKey]) return cropImages[cleanKey];

  if (cleanKey.includes('rice')) return cropImages.rice;
  if (cleanKey.includes('wheat')) return cropImages.wheat;
  if (cleanKey.includes('maize') || cleanKey.includes('corn')) return cropImages.maize;
  if (cleanKey.includes('chickpea') || cleanKey.includes('chana')) return cropImages.chickpea;
  if (cleanKey.includes('kidney') || cleanKey.includes('rajma')) return cropImages.kidneybeans;
  if (cleanKey.includes('pigeon') || cleanKey.includes('arhar') || cleanKey.includes('tur')) return cropImages.pigeonpeas;
  if (cleanKey.includes('moth')) return cropImages.mothbeans;
  if (cleanKey.includes('mung') || cleanKey.includes('greengram')) return cropImages.mungbean;
  if (cleanKey.includes('blackgram') || cleanKey.includes('urad')) return cropImages.blackgram;
  if (cleanKey.includes('lentil') || cleanKey.includes('masoor')) return cropImages.lentil;
  if (cleanKey.includes('pomegranate')) return cropImages.pomegranate;
  if (cleanKey.includes('banana')) return cropImages.banana;
  if (cleanKey.includes('mango')) return cropImages.mango;
  if (cleanKey.includes('grapes')) return cropImages.grapes;
  if (cleanKey.includes('watermelon')) return cropImages.watermelon;
  if (cleanKey.includes('muskmelon')) return cropImages.muskmelon;
  if (cleanKey.includes('apple')) return cropImages.apple;
  if (cleanKey.includes('orange')) return cropImages.orange;
  if (cleanKey.includes('papaya')) return cropImages.papaya;
  if (cleanKey.includes('coconut')) return cropImages.coconut;
  if (cleanKey.includes('cotton')) return cropImages.cotton;
  if (cleanKey.includes('jute')) return cropImages.jute;
  if (cleanKey.includes('coffee')) return cropImages.coffee;

  return cropImages.rice;
}
