export type BottleColor = 'teal' | 'cobalt' | 'emerald' | 'amber';
export type FormulaType = 'energy' | 'calm' | 'focus' | 'immunity';

export interface BrandConfig {
  bottleColor: BottleColor;
  formula: FormulaType;
  mugText: string;
}

export interface UserInteractionState {
  liked: boolean;
  likesCount: number;
  saved: boolean;
  following: boolean;
}
