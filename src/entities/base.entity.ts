import { CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

// todo.. add explaination of below and sample usage
export abstract class BaseEntity<T> {
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
