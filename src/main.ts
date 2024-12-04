import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ChuppyBoo service')
    .setDescription('ChuppyBoo is a mini-character universe where players can collect, breed, upgrade, battle, and trade token-based creatures known as Boo')
    .setVersion('v1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, documentFactory);

  await app.listen(process.env.NEXT_PUBLIC_PORT ?? 3000);
}
bootstrap();
