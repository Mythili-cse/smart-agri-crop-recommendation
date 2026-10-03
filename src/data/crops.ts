import { cropDataset, fallbackCrop } from './cropData';
import type { CropDetails } from '../types';

export const cropsData: Record<string, CropDetails> = cropDataset.reduce((acc, crop) => {
  acc[crop.id] = crop;
  return acc;
}, {} as Record<string, CropDetails>);

export { fallbackCrop, cropDataset };
