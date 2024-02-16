import { IsString, IsNotEmpty, IsObject, IsOptional } from 'class-validator';

export class CreateClientDto {
  @IsObject()
  @IsNotEmpty({ message: 'should not be empty' })
  NISrvRequest: {
    request_client_create: {
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
        bank_code: string;
        card_name: string;
        card_type: string;
        personal_details: {
          first_name: string;
          last_name: string;
          date_of_birth: string;
          middle_name: string;
          citizenship: string;
          gender: string;
        };
        contact_details: {
          mobile_phone: string;
          email: string;
        };
        employment_details: {
          employer_name: string;
          occupation: string;
        };
        addresses: [
          {
            address_type: string;
            address_line_1: string;
            city: string;
            country: string;
            zip: string;
          },
        ];
        identity_proof_document: {
          number: string;
          type: string;
          expiry_date: string;
        };
        custom_fields: [
          {
            key: string;
            value: string;
          },
          {
            key: string;
            value: string;
          },
        ];
      };
    };
  };
}
