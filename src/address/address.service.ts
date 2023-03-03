import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/create-address.dto';
import { Address } from './entities/address.entity';
import { AddressRepository } from './respositories/address.repository';

@Injectable()

export class AddressService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>
  ) { }

  async getCepByAPI(cep): Promise<any> {
    try {
      //falta resolver aqui
      const address = await this.addressRepository.findOneOrFail({
        where: {
          cep: cep
        }   
      });
      console.log(address)
      if (!address || []) {
        const uri = 'https://viacep.com.br';
        const url = `${uri}/ws/${cep}/json/`;

        const response = await this.httpService
          .get(url)
          .toPromise()
          .then(res => {
            const result = res.data;
            const fileds = {
              cep: result.cep,
              publicPlace: result.logradouro,
              neighborhood: result.bairro,
              county: result.localidade,
              uf: result.uf,
            };
            return fileds;
          });

          this.addressRepository.save(response)

          console.log(response)
        if (!response) {
          throw new Error('Não foi possível realizar a consulta de endereço');
        }
        return response;
      } else {
        return address;
      }
    } catch (error) {
      console.error(error);
      throw new Error('Não foi possível realizar a consulta de endereço');
    }
  }
}
