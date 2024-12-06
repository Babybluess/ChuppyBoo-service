import { Controller, Get } from '@nestjs/common';
import { BattleService } from './battle.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Battle')
@Controller({ version: '1', path: 'battle' })
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  // Fetch battle details: name, type, stakingPool, winner name
  @Get()
  async getAllBattles(): Promise<any[]> {
    return this.battleService.getAllBattles();
  }
}
