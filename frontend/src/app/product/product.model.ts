import { User } from "../authentication/auth.model";

export interface Product {
  code: string;
  name: string;
  brand: string;
  reviews: Review[];
  image: string | null;
}


export interface Review {
  id: number;
  content: string;
  rating: number;
  product: Product;
  user: User;
}