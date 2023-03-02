import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import axios from '@nestjs/axios';

@Injectable()

export class AddressService {
  constructor(private readonly httpService: HttpService) { }

  async getCepByAPI(): Promise<any> {
    try {
      const cep = '95538000';
      const uri = 'https://viacep.com.br';
      const url = `${uri}/ws/${cep}/json/`;

      const response = await this.httpService
        .get(url)
        .toPromise()
        .then(res => {
          const result = res.data;
          const fileds = {
            cep: result.cep,
            logradouro: result.logradouro,
            complemento: result.complemento,
            bairro: result.bairro,
            localidade: result.localidade,
            uf: result.uf,
            unidade: result.unidade,
            ibge: result.ibge,
            gia: result.gia,
          };
          return fileds;
        });

      if (!response) {
        throw new Error('Não foi possível realizar a consulta de endereço');
      }
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Não foi possível realizar a consulta de endereço');
    }
  }
}
