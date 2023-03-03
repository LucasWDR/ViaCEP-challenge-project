import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { EntityManager } from 'typeorm';
import { AddressService } from './address.service';
import { Address } from './entities/address.entity';

const oneTodo: Address = plainToClass(Address, { id: 1, title: '99999-99' });
const mockedRepo = {
    findOneOrFail: jest.fn((id) => Promise.resolve(oneTodo)),
  };

describe('AddressController', () => {
  let addressService: AddressService;
  let entityManager: EntityManager
  //foi colocado a dependencia do arquivo httService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [
         AddressService,
         {
            provide: HttpService,
            useValue: {
              get: jest.fn() 
            }
         },
         {
            provide: getRepositoryToken(Address),
            useValue: mockedRepo
          }   
        ]
    }).compile();

    addressService = module.get<AddressService>(AddressService);
  });

  it('should be defined', () =>{
    expect(addressService).toBeDefined();
  });
});

