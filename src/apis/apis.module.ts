import { Module } from '@nestjs/common';
import { ApisService } from './apis.service';
import { ApisController } from './apis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from 'src/entities/account.entity';
import { ClientsEntity } from 'src/entities/client.entity';
import { TransactionsEntity } from 'src/entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      ClientsEntity,
      TransactionsEntity,
    ]),
  ],
  controllers: [ApisController],
  providers: [ApisService],
})
export class ApisModule {}
