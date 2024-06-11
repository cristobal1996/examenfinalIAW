import { Gama } from "src/modulos/gamas/entities/gama.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: ' Productos'})

export class Producto {
@PrimaryColumn('uuid')
cod: string;

@Column('text', {
    unique: true,
})
nombre: string;


@Column('text', {
    unique: true,
})
proveedor: number;

@Column({
    type:'text',
    nullable: true
})
descripcion: string;

@Column({
    type: 'int',
    default: 0
})
stock: number;


@Column({
    type: 'int',
    default: 0
})
pvp: number;

@Column({
    type: 'int',
    default: 0
})
pcoste: number;

@Column('text', {
    nullable: true,
  })
thumbnailUrl?: string;

@ManyToOne(() => Gama, (gama) => gama.Producto, {
    cascade: true,
  })
  codgama: Gama;
}
