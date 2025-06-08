export class CreatePostDto {
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
}
