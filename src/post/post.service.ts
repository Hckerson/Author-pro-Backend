import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from 'lib/generated/prisma';
// import { Post, Status } from '@prisma/client'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAllPost(): Promise<Post[]> {
    console.log(`Finding posts:`);
    const allPost = await this.prisma.post.findMany();
    return allPost
  }

  async fetchRelatedPost(categories: string[]): Promise<Post[]>{
    const response = await this.prisma.post.findMany()
    return response
  }

  async findOne(slug: string): Promise<Post | null> {
    console.log(`Finding specific post`);
    const post = await this.prisma.post.findUnique({
      where: {
        slug: slug,
      },
    });
    return post;
  }

  async update(slug: string, updatePostDto: UpdatePostDto) {
    const response = await this.prisma.post.update({where: {
      slug : slug
    }, data: {
      status : updatePostDto.status
    }})
  }

  async remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
