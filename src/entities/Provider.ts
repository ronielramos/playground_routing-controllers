import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Product } from './Product'

@Entity()
export class Provider extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'varchar', length: 24 })
  cnpj!: string;

  @Column({ type: 'varchar', length: 15 })
  phone_number!: string;

  @Column({ type: 'simple-json' })
  address!: {
    coutry: string;
    state: string;
    city: string;
    district: string;
    street: string;
    number: string;
    postal_code: string;
  };

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()'
  })
  createdAt!: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()'
  })
  updatedAt!: Date;

  @ManyToOne(type => Product)
  products!: Product[];
}
