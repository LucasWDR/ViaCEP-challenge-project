import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
/* const Axios = use('axios'); */
import { ApiResponse } from '@nestjs/swagger';
import { AddressService } from "./address.service";


@Controller('/address')
export class AddressController {
    constructor(private addressService: AddressService) { }
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Data was fetched successfully',
        // type do Dto falta inserir 
    })

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Request succesfully',
    })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal Server Error',
    })
    @Get('/find-cep')
    public getCepbyAPI(): Promise<any> {
        try {
            //Aqui ta passando
            return this.addressService.getCepByAPI();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `no data found`,
              }, 404);
        }
    }
}