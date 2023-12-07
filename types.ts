export interface RatingTypes {
  rate: number;
  count: number;
}

export interface DevicesTypes {
  title: string | null;
  price: number;
  image: string;
  rating: RatingTypes;
  category: string | null;
  description: string | null;
}
