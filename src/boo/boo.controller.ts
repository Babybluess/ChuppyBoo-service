import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooService } from './boo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Boo')
@Controller({ version: '1', path: 'boo' })
export class BooController {
  constructor(private readonly booService: BooService) {}

  // Fetch all boos details
  @Get()
  async getAllBoos(): Promise<any[]> {
    return this.booService.getAllBoos();
  }

  // Fetch boo details by id: id, name, url, specialSkill name
  @Get('detail/:id')
  async getBooDetailById(@Param('id') id: string): Promise<any> {
    return this.booService.getBooDetailById(id);
  }
}
