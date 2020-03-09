import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Provider } from './Provider'

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    length: 100,
    nullable: false
  })
  name!: string;

  @Column({
    nullable: false
  })
  price!: number;

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

  @Column({
    nullable: false
  })
  @ManyToOne(type => Provider, provider => provider.products)
  owner!: string;
}
