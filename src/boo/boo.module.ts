import { Module } from '@nestjs/common';
import { BooService } from './boo.service';
import { BooController } from './boo.controller';

@Module({
  controllers: [BooController],
  providers: [BooService],
})
export class BooModule {}
