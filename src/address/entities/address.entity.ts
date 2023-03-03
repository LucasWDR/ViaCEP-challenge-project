import { BaseEntity } from "src/common/database/base-entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'addresses'})
export class Address extends BaseEntity {
 @PrimaryGeneratedColumn('uuid')
  id: string;

 @Column({name: 'cep'})
  cep: string

 @Column({name: 'public_place'}) //logradouro
  publicPlace: string

 @Column({name: 'neighborhood'})  //bairro
  neighborhood: string

 @Column({name: 'county'}) //municipio
  county: string

 @Column({name: 'uf'})
  uf: string

  
}