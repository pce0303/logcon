import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { Challenge } from '../../shared/entities/challenge.entity';
import { Solve, User } from 'src/shared/entities';
import { CategoryModule } from '../category/category.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forFeature([Challenge, Solve, User]),
    CategoryModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [ChallengeController],
  providers: [ChallengeService],
  exports: [ChallengeService],
})
export class ChallengeModule {}
