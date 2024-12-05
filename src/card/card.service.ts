import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CardService {
  constructor (private prisma: PrismaService) {}

  async getAllCards(): Promise<any[]> {
    return await this.prisma.card.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        property: true,
        effect: true,
        damage: true,
        description: true,
      }
    })
  }

  async getCardDetailsById(id: string): Promise<any> {
    const card = await this.prisma.card.findUnique({
      where: {id},
      select: {
        id: true,
        name: true,
        type: true,
        property: true,
        effect: true,
        damage: true,
        description: true,
      }
    });

    if (!card) {
      throw new NotFoundException(`Card with id ${id} not found`);
    }

    return card;
  }
}
