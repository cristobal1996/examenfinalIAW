import { Producto } from "src/modulos/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: ' Gama '})

export class Gama {
@PrimaryColumn()
nombre: string;

@Column('text', {
    unique: true,
})
descripcion: string;

@Column('text', {
    nullable: true,
  })
thumbnailUrl?: string;

@OneToMany(() => Producto, (Producto) => Producto.codgama, { cascade: false })
Producto?: Producto[];
}
