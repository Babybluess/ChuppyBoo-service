import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async getUserDetails(userId: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          name: true,
          diamond: true,
          wallets : {
            select: {
              nfts: true,
            }
          },
          histories: {
            select: {
              id: true,
              name: true,
              type: true,
              winnerId: true,
              loserId: true,
              createdAt: true,
            }
          }
        }
      })

      if (!user) {
        throw new Error('User not found');
      }

      const totalNFTs = user.wallets?.reduce(
        (count, wallet) => count + wallet.nfts.length,
        0
      );

      return {
        name: user.name,
        diamond: user.diamond,
        totalNFTs,
        battleHistory: user.histories.map((battle) => ({
          id: battle.id,
          name: battle.name,
          type: battle.type,
          winnerId: battle.winnerId,
          loserId: battle.loserId,
          createdAt: battle.createdAt,
        })),
      }
    } catch (error) {
      throw new Error(`Failed to fetch user details: ${error.message}`);
    }
  
  }
}
