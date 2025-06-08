import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PostModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
