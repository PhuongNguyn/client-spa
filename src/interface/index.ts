export interface IPost {
  thumbnail: string;
  description: string;
  title: string;
  _id?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
}
