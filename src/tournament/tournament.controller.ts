import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tournament')
@Controller({ version: '1', path: 'tournament' })
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  // Get total count of tournaments
  @Get('count')
  async getTotalTournamentsCount(): Promise<number> {
    return this.tournamentService.getTotalTournamentsCount();
  }

  // Get tournament details by ID
  @Get('detail/:id')
  async getTournamentDetailsById(@Param('id') id: string): Promise<any> {
    return this.tournamentService.getTournamentDetailsById(id);
  }
}
