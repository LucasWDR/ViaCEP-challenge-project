import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from 'src/address/address.module';
import { DataSource } from 'typeorm';
import { Address } from './address/entities/address.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', /// o tipo de conexão
      host: 'localhost', // a host
      port: 5432, //porta do postgres padrão
      database: 'postgres', //nome do banco 
      username: 'postgres',
      password: '123456789',
      entities: [Address],
      synchronize: true,
    }),
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
