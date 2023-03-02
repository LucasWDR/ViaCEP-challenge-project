import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";

@Module({
   imports:[HttpModule],
   providers : [AddressService],
   controllers: [AddressController]
})

export class AddressModule {};