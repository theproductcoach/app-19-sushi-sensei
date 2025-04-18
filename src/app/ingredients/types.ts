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

export interface IngredientItem {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  usage: string;
  tips: string[];
  varieties: string[];
  imageUrl: string;
  storageInfo: string;
  nutrition?: {
    calories?: string;
    carbs?: string;
    protein?: string;
    fiber?: string;
  };
  preparationSteps?: string[];
} 