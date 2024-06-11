import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductosService } from '../productos/productos.service';
import { GamasService } from '../gamas/gamas.service';
import { CreateProductoDto } from '../productos/dto/create-producto.dto';
import { CreateGamaDto } from '../gamas/dto/create-gama.dto';
import * as seedProductos from "../seed/data/productos.json";
import * as seedGamas from "../seed/data/gamas.json";

@Injectable()
export class SeedService {
  constructor(
    private readonly productoService: ProductosService,
    private readonly gamaService: GamasService,
  ) {}
  public async loadData() {
    await this.insertNewProductos();
    await this.insertNewGamas();
  }
  private async insertNewProductos() {
    try {
      const insertPromisesProductos = [];
      seedProductos.forEach((producto: CreateProductoDto) => {
        insertPromisesProductos.push(this.productoService.create(producto));
      });
      await Promise.all(insertPromisesProductos);
      return {
        msg: 'Load',
        data: insertPromisesProductos,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'prueba',
      );
    }
  }

  private async insertNewGamas() {
    try {
      const insertPromisesGamas = [];
      seedGamas.forEach((gama: CreateGamaDto) => {
        insertPromisesGamas.push(this.gamaService.create(gama));
      });
      await Promise.all(insertPromisesGamas);
      return {
        msg: 'Load',
        data: insertPromisesGamas,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'prueba',
      );
    }
  }
}
