import { Controller, Get } from '@nestjs/common';
import { BattleService } from './battle.service';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  // Fetch battle details: name, type, stakingPool, winner name
  @Get()
  async getAllBattles(): Promise<any[]> {
    return this.battleService.getAllBattles();
  }
}
