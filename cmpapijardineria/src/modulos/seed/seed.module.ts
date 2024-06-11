import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductosModule } from '../productos/productos.module';
import { GamasModule } from '../gamas/gamas.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductosModule, GamasModule],
})
export class SeedModule {}
