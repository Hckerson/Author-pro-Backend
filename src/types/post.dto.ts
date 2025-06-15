export class Posts {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
  readingTime: number;
  categories: string[];
  author?: {
    name: string;
    image: string;
  };
  previousPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

export class CreatePost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
  readingTime: number;
  categories: string[];
  author?: {
    name: string;
    image: string;
  };
}
