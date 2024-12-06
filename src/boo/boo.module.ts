import { Module } from '@nestjs/common';
import { BooService } from './boo.service';
import { BooController } from './boo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BooController],
  providers: [BooService, PrismaService],
})
export class BooModule {}
