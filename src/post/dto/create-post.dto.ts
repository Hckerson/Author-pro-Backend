export class CreatePostDto {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured: boolean;
  status: 'DRAFTED' | 'PUBLISHED';
  date: string;
  coverImage: string;
  readingTime: number;
  categories: string[];
  author?: {
    name: string;
    image: string;
  };
}
