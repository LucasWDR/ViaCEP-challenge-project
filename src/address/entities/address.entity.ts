import { BaseEntity } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: 'addresses'})
export class Address extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column({name: 'cep'})
  cep: string

 @Column({name: 'public_place'})
  publicPlace: string

 @Column({name: 'neighborhood'})
  neighborhood: string

 @Column({name: 'county'})
  county: string

 @Column({name: 'uf'})
  uf: string

}