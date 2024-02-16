import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { ClientsEntity } from './client.entity';
import { TransactionsEntity } from './transaction.entity';

// todo.. add explanation of each of below and sample usage
// keep tables names in sync . tbl_auth and tbl_plans?
@Entity('accounts')
export class AccountEntity extends BaseEntity<AccountEntity> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    name: 'customer_id',
    length: 200,
    unique: true,
    nullable: false,
  })
  customerId: string;

  @Column({
    type: 'text',
    name: 'account_number',
    unique: true,
    nullable: false,
  })
  accountNumber: string;

  @Column({ type: 'text', name: 'currency' })
  currency: string;

  @OneToOne(() => ClientsEntity, (client) => client.account)
  client: ClientsEntity;

  @OneToMany(() => TransactionsEntity, (transaction) => transaction.account)
  transactions: TransactionsEntity[];
}
