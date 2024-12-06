import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TournamentService {
  constructor(private prisma: PrismaService) {}

  async getTotalTournamentsCount(): Promise<number> {
    return await this.prisma.tournament.count();
  }

  async getTournamentDetailsById(id: string): Promise<any> {
    const tournament = await this.prisma.tournament.findUnique({
      where: {id},
      select: {
        id: true,
        startAt: true,
        endAt: true,
        status: true,
      }
    });

    if (!tournament) {
      throw new Error('Tournament not found');
    }

    return tournament;
  }
}
