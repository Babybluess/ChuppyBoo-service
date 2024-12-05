import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BattleService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBattles(): Promise<any> {
    return this.prisma.battle.findMany({
      select: {
        name: true,
        type: true,
        stakingPool: true,
        winner: {
          select: {
            name: true,
          }
        }
      }
    })
  }
}
