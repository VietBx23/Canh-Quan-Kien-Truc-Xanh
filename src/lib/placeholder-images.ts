import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Add other data types here
export type ProjectPlaceholder = ImagePlaceholder;

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
