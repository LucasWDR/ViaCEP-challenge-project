import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";
import { Address } from "./entities/address.entity";
import { AddressRepository } from "./respositories/address.repository";

@Module({
   imports:[
      HttpModule,
      TypeOrmModule.forFeature([Address]), 
   ],
   providers : [AddressService],
   controllers: [AddressController]
})

export class AddressModule {};