import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
  IsBoolean,
  IsObject,
} from 'class-validator';

export class CreateAccountDto {
  @IsObject()
  @IsNotEmpty({ message: 'should not be empty' })
  NISrvRequest: {
    request_account_create: {
      header: {
        msg_id: string;
        msg_type: string;
        msg_function: string;
        src_application: string;
        target_application: string;
        timestamp: string;
        tracking_id: string;
        bank_id: string;
      };
      body: {
        customer_id: string;
        card_type: string;
        account: {
          customer_id: string;
          branch_code: string;
          product_code: string;
          currency: string;
        };
      };
    };
  };
}
