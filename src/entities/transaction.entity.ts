import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { AccountEntity } from './account.entity';

// todo.. add explanation of each of below and sample usage
// keep tables names in sync . tbl_auth and tbl_plans?
@Entity('transactions')
export class TransactionsEntity extends BaseEntity<TransactionsEntity> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', name: 'transaction_code', nullable: true })
  transactionCode: string;

  @Column({ type: 'text', name: 'amount', nullable: false })
  amount: string;

  @Column({ type: 'text', name: 'currency', nullable: false })
  currency: string;

  @Column({ type: 'text', name: 'billing_amount', nullable: false })
  billingAmount: string;

  @Column({ type: 'text', name: 'billing_currency', nullable: false })
  billingCurrency: string;

  @Column({ type: 'text', name: 'transaction_ref_number', nullable: false })
  transactionRefNumber: string;

  @Column({ type: 'text', name: 'external_ref_number', nullable: false })
  externalRefNumber: string;

  @Column({ type: 'text', name: 'city', nullable: false })
  city: string;

  @Column({ type: 'text', name: 'country', nullable: false })
  country: string;
  @Column({ type: 'text', name: 'src_application', nullable: false })
  srcApplication: string;

  @Column({ type: 'text', name: 'target_application', nullable: false })
  targetApplication: string;

  @Column({ type: 'text', name: 'target_account_number', nullable: true })
  targetAccountNumber: string;

  @ManyToOne(() => AccountEntity, (account) => account.transactions)
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;
}
