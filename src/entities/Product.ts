import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm'
import { Provider } from './Provider'

import { IsDefined, Min, Length } from 'class-validator'

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @IsDefined()
  @Length(3, 100)
  @Column({
    length: 100,
    nullable: false
  })
  name!: string;

  @Column({
    nullable: false
  })
  @IsDefined()
  @Min(0)
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
