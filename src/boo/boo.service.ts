import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBooDto } from './dto/create-boo.dto';
import { UpdateBooDto } from './dto/update-boo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooService {
  constructor(private prisma: PrismaService) {}

  async getAllBoos(): Promise<any[]> {
    return await this.prisma.boo.findMany({
      select: {
        id: true,
        name: true,
        url: true,
        specialSkill: {
          select: {
            name: true,
          }
        },
      }
    })
  }

  async getBooDetailById(id: string): Promise<any> {
    const boo = await this.prisma.boo.findUnique({
      where: {id},
      select: {
        id: true,
        name: true,
        url: true,
        specialSkill: {
          select: {
            name: true,
          }
        },
      }
    });

    if(!boo) {
      throw new NotFoundException(`Boo with id ${id} not found`);
    }

    return boo;
  }
}
