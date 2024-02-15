import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Injectable()
export class ApisService {
  accountTransaction() {
    try {
      return {
        response_account_transaction: {
          header: {
            msg_id: 'LPS000027937',
            msg_type: 'TRANSACTION',
            msg_function: 'REP_ACCOUNT_TRANSACTION',
            src_application: 'BNK',
            target_application: 'WAY4',
            timestamp: '2024-02-13T18:01:52.596+03:00',
            tracking_id: 'LPS000027937',
            bank_id: 'LOOP',
          },
          exception_details: {
            application_name: 'TCC-ADP',
            date_time: '2024-02-13T18:01:52.596+03:00',
            status: 'S',
            error_code: '000',
            error_description: 'Success',
            transaction_ref_id: 'LPS000027937',
          },
          body: {
            account_identifier_id: '0003621110000000087',
            account_identifier_type: 'CONTRACT_NUMBER',
            response_code: '0',
            status: 'Waiting',
            tranCode: '102',
            source: 'PMAX',
            dest: 'TIBCO',
            extendedHeader: 'Test',
            response_record_version: '4',
            score_count: '00',
            decision_count: '0',
          },
        },
      };
    } catch (error) {
      return error;
    }
  }
  cardNonmon() {
    try {
      return {
        response_card_nonmon: {
          header: {
            msg_id: 'LOS000010036',
            msg_type: 'TRANSACTION',
            msg_function: 'REP_CARD_NONMON',
            src_application: 'CRM',
            target_application: 'FALCON',
            timestamp: '2024-02-10T23:09:42.632+03:00',
            tracking_id: 'LOS000010036',
            bank_id: 'LOOP',
          },
          exception_details: {
            application_name: 'TCC-ADP',
            date_time: '2024-02-10T23:09:42.632+03:00',
            status: 'S',
            error_code: '000',
            error_description: 'Success',
          },
        },
      };
    } catch (error) {
      return error;
    }
  }

  clientCreate() {
    try {
      return {
        response_client_create: {
          header: {
            msg_id: 'LOS000010199',
            msg_type: 'TRANSACTION',
            msg_function: 'REP_CLIENT_CREATE',
            src_application: 'SSP',
            target_application: 'WAY4',
            timestamp: '2024-02-14T10:05:31.103+03:00',
            tracking_id: 'LOS000010199',
            bank_id: 'LOOP',
          },
          exception_details: {
            application_name: 'TCC-ADP',
            date_time: '2024-02-14T10:05:31.103+03:00',
            status: 'S',
            error_code: '000',
            error_description: 'Success',
          },
          body: {
            customer_id: 'FOS0000000000001530',
            bank_code: '362',
            card_name: 'TALEB ALI ALSADDAH',
            card_type: 'PREPAID',
            personal_details: {
              gender: 'M',
              first_name: 'TALEB',
              last_name: 'ALSADDAH',
              middle_name: 'ALI',
              citizenship: 'SAU',
              date_of_birth: '1974-06-15',
            },
            contact_details: {
              mobile_phone: '966548711101',
              email: 'taleb11192@gmail.com',
            },
            addresses: [
              {
                address_type: 'PRESENT',
                address_line_1: '3644 Tarut 68 32622 AZ ZAWR ',
                city: 'AZ ZAWR',
                country: 'SAU',
                zip: '32622',
              },
            ],
            identity_proof_document: [
              {
                number: '1003004437',
                type: 'national_id',
                expiry_date: '2029-05-09',
              },
            ],
            supplementary_documents: [{}],
            employment_details: [
              {
                employer_name: 'شركة بول العربية المتحده لصناعة العلب',
                occupation: 'O',
              },
            ],
            custom_fields: [
              {
                key: 'CL-COMPANY_NAME',
                value: 'شركة بول العربية المتحده لصناعة العلب',
              },
              {
                key: 'CL-DATE_OPEN',
                value: '2024-02-14',
              },
              {
                key: 'CL-EMB_NAME_LAST',
                value: 'TALEB ALI ALSADDAH',
              },
              {
                key: 'CL-MAIL-ADDR-IND',
                value: 'PRESENT',
              },
              {
                key: 'CL-NAME_FIRST',
                value: 'TALEB',
              },
              {
                key: 'CL-NAME_LAST',
                value: 'ALSADDAH',
              },
              {
                key: 'CL-NAME_THIRD',
                value: 'ALI',
              },
              {
                key: 'CL-SHORT_NAME',
                value: 'ALSADDAH TALEB',
              },
            ],
          },
        },
      };
    } catch (error) {
      return error;
    }
  }

  accountBalanceEnquiry() {
    try {
      return {
        response_account_balance_enquiry: {
          header: {
            msg_id: 'LPS000028092',
            msg_type: 'ENQUIRY',
            msg_function: 'REP_ACCOUNT_BALANCE_ENQUIRY',
            src_application: 'BNK',
            target_application: 'WAY4',
            timestamp: '2024-02-14T13:33:09.509+03:00',
            tracking_id: 'LPS000028092',
            bank_id: 'LOOP',
          },
          exception_details: {
            application_name: 'TCC-ADP',
            date_time: '2024-02-14T13:33:09.509+03:00',
            status: 'S',
            error_code: '000',
            error_description: 'Success',
          },
          body: {
            account_identifier_type: 'CONTRACT_NUMBER',
            account_identifier_id: '0003621110000000891',
            balances: [
              {
                type: 'AVAILABLE',
                currency: 'SAR',
                amount: '0.0',
              },
              {
                type: 'BLOCKED',
                currency: 'SAR',
                amount: '0.0',
              },
              {
                type: 'TOTAL_BALANCE',
                currency: 'SAR',
                amount: '0.0',
              },
            ],
          },
        },
      };
    } catch (error) {
      return error;
    }
  }

  p2PTransfer() {
    try {
      return {
        response_p_2_p_transfer: {
          header: {
            msg_id: 'LPS000027441',
            msg_type: 'TRANSACTION',
            msg_function: 'REP_P2P_TRANSFER',
            src_application: 'BNK',
            target_application: 'WAY4',
            timestamp: '2024-02-09T09:30:14.405+03:00',
            tracking_id: 'LPS000027441-1',
            bank_id: 'LOOP',
          },
          exception_details: {
            application_name: 'TCC-ADP',
            date_time: '2024-02-09T09:30:14.405+03:00',
            status: 'S',
            error_code: '000',
            error_description: 'Success',
          },
          body: {
            response_code: '0',
            status: 'Waiting',
            tranCode: '102',
            source: 'PMAX',
            dest: 'TIBCO',
            extendedHeader: 'Test',
            response_record_version: '4',
            score_count: '00',
            source_decision_count: '1',
            source_decisions: [
              {
                decision_type: 'origAcctCase',
              },
            ],
            target_decision_count: '0',
          },
        },
      };
    } catch (error) {
      return error;
    }
  }
}
