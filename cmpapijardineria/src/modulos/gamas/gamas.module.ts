import { Module } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { GamasController } from './gamas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gama } from './entities/gama.entity';

@Module({
  controllers: [GamasController],
  providers: [GamasService],
  imports: [
    TypeOrmModule.forFeature([Gama]) 
  ]
})
export class GamasModule {}
