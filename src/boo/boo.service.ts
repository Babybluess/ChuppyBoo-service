import { Injectable } from '@nestjs/common';
import { CreateBooDto } from './dto/create-boo.dto';
import { UpdateBooDto } from './dto/update-boo.dto';

@Injectable()
export class BooService {
  create(createBooDto: CreateBooDto) {
    return 'This action adds a new boo';
  }

  findAll() {
    return `This action returns all boo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boo`;
  }

  update(id: number, updateBooDto: UpdateBooDto) {
    return `This action updates a #${id} boo`;
  }

  remove(id: number) {
    return `This action removes a #${id} boo`;
  }
}
