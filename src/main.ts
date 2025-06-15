import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.enableCors({ origin: 'http://localhost:3000', credentials: true });
  console.log(`Server is running on port ${port}`);
  await app.listen(port);
}
bootstrap();
