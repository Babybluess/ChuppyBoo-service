import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooService } from './boo.service';
import { CreateBooDto } from './dto/create-boo.dto';
import { UpdateBooDto } from './dto/update-boo.dto';

@Controller('boo')
export class BooController {
  constructor(private readonly booService: BooService) {}

  @Post()
  create(@Body() createBooDto: CreateBooDto) {
    return this.booService.create(createBooDto);
  }

  @Get()
  findAll() {
    return this.booService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBooDto: UpdateBooDto) {
    return this.booService.update(+id, updateBooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booService.remove(+id);
  }
}
