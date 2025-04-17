export type SeafoodItem = {
  id: string;
  name: string;
  japaneseName: string;
  scientificName?: string;
  description: string;
  taste: string;
  texture: string;
  seasonality: string[];
  commonPreparations: string[];
  imageUrl: string;
  nutrition?: {
    protein?: string;
    omega3?: string;
    calories?: string;
  };
}; 