import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BattleModule } from './battle/battle.module';
import { BooModule } from './boo/boo.module';
import { CardModule } from './card/card.module';
import { EventModule } from './event/event.module';
import { RankingModule } from './ranking/ranking.module';
import { RewardModule } from './reward/reward.module';
import { TournamentModule } from './tournament/tournament.module';

@Module({
  imports: [UserModule, TournamentModule, RewardModule, RankingModule, EventModule, CardModule, BooModule, BattleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
