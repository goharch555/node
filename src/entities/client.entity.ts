import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { AccountEntity } from './account.entity';

// todo.. add explanation of each of below and sample usage
// keep tables names in sync . tbl_auth and tbl_plans?
@Entity('clients')
export class ClientsEntity extends BaseEntity<ClientsEntity> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', name: 'first_name', nullable: false })
  firstName: string;

  @Column({ type: 'text', name: 'last_name', nullable: false })
  lastName: string;

  @Column({ type: 'text', name: 'gender', nullable: false })
  gender: string;

  @Column({ type: 'text', name: 'date_of_birth', nullable: false })
  dateOfBirth: string;

  @Column({ type: 'text', name: 'citizenship', nullable: false })
  citizenship: string;

  @Column({ type: 'text', name: 'mobile_no', nullable: false })
  mobileNo: string;

  @Column({ type: 'text', name: 'email', nullable: false })
  email: string;

  @OneToOne(() => AccountEntity, (account) => account.client)
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;
}
