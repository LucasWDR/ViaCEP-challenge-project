import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/create-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>
  ) { }

  async getCepByAPI(cep: string): Promise<any> {
    try {
      const address = await this.addressRepository.findOne({
        where: {
          cep: cep
        }
      });

      if (!address) {
        const uri = 'https://viacep.com.br';
        const url = `${uri}/ws/${cep}/json/`;

        const response: CreateAddressDto = await this.httpService
          .get(url)
          .toPromise()
          .then(res => {
            const result = res.data;
            const fileds = {
              cep: String(result.cep),
              publicPlace: String(result.logradouro),
              neighborhood: String(result.bairro),
              county: String(result.localidade),
              uf: String(result.uf),
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
