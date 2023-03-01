import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AddressController } from "./address.controller";




@Module({
   imports:[HttpModule],
   controllers: [AddressController]
})

export class AddressModule {};