export type CardVariant = 'default' | 'total';

export interface Card {
  id: number;
  title: string;
  iconUrl: string;
  amount: string;
  variant: CardVariant;
}
