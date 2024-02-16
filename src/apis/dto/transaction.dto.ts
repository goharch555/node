import {
  IsString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsArray,
} from 'class-validator';

export class TransactionDto {
  @IsObject()
  @IsNotEmpty({ message: 'should not be empty' })
  NISrvRequest: {
    request_account_transaction: {
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
        account_identifier_id: string;
        account_identifier_type: string;
        transaction: {
          transaction_code: string;
          counter_party_number: string;
          transaction_date: string;
          amount: string;
          currency: string;
          billing_amount: string;
          billing_currency: string;
          description: string;
          transaction_ref_number: string;
          external_ref_number: string;
          rules_data: [
            {
              key: string;
              value: string;
            },
          ];
          city: string;
          country: string;
        };
      };
    };
  };
}
