
import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';

@Injectable()

export class AddressService {
    constructor(private readonly httpService: HttpService) {}

  async getCepByAPI(): Promise<any> {
    const cepMock: string = '95538000';
    const url = `viacep.com.br/ws/${cepMock}/json/`;


   const data = await this.httpService.get(url);
   if(!data) return null;

    console.log(data);

    return data;
  }
}
