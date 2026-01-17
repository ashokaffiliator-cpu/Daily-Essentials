
export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  affiliateUrl: string;
  tags: string[];
  solution?: string; // The exact product name for search accuracy
}

export interface Review {
  id: string;
  author: string;
  content: string;
  date: string;
}
