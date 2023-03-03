import { EntityRepository, Repository } from "typeorm";
import { Address } from "../entities/address.entity";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{ 
/*     async findCep(cep: string){
        const queryAddress = await this.createQueryBuilder('addresses')
        .addSelect('id')
        .addSelect('cep')
        .addSelect('public_place')
        .addSelect('neightborhood')
        .addSelect('county')
        .addSelect('uf')
        .andWhere('addresses.cep = :cep', { cep: cep})
        .getOne()

        return queryAddress;
    } */
}