export default interface Article {
  id?: number;
  title: string;
  body: string;
  category: number;
  createdAt?: string;
  updatedAt?: string;
  author?: string;
}
