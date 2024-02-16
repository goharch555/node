import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
// import { UpdateApiDto } from './dto/update-api.dto';
import {
  generateAccountNumber,
  generateCustomerId,
  getCurrentTimestamp,
} from 'src/helper/random-number';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from 'src/entities/account.entity';
import { ClientsEntity } from 'src/entities/client.entity';
import { Repository } from 'typeorm';
import { errorMessages } from 'src/helper/constant-messages';
import { CreateClientDto } from './dto/create-client.dto';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionsEntity } from 'src/entities/transaction.entity';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly _AccountEntityRepository: Repository<AccountEntity>,
    @InjectRepository(ClientsEntity)
    private readonly _ClientsEntityRepository: Repository<ClientsEntity>,
    @InjectRepository(TransactionsEntity)
    private readonly _TransactionsEntity: Repository<TransactionsEntity>,
  ) {}

  async accountTransaction(data: TransactionDto) {
    try {
      const account = await this._AccountEntityRepository.findOne({
        where: {
          accountNumber:
            data.NISrvRequest.request_account_transaction.body
              .account_identifier_id,
        },
      });
      if (!account) {
        return errorMessages.accountNotFound;
      }
      const transaction = await this._TransactionsEntity.create({
        account: account,
        amount:
          data.NISrvRequest.request_account_transaction.body.transaction.amount,
        billingAmount:
          data.NISrvRequest.request_account_transaction.body.transaction
            .billing_amount,
        billingCurrency:
          data.NISrvRequest.request_account_transaction.body.transaction
            .billing_currency,
        externalRefNumber:
          data.NISrvRequest.request_account_transaction.body.transaction
            .external_ref_number,
        transactionRefNumber:
          data.NISrvRequest.request_account_transaction.body.transaction
            .transaction_ref_number,
        transactionCode:
          data.NISrvRequest.request_account_transaction.body.transaction
            .transaction_code,
        city: data.NISrvRequest.request_account_transaction.body.transaction
          .city,
        country:
          data.NISrvRequest.request_account_transaction.body.transaction
            .country,
        currency:
          data.NISrvRequest.request_account_transaction.body.transaction
            .currency,
        srcApplication:
          data.NISrvRequest.request_account_transaction.header.src_application,
        targetApplication:
          data.NISrvRequest.request_account_transaction.header
            .target_application,
      });
      await this._TransactionsEntity.save(transaction);
      return {
        NISrvResponse: {
          response_account_transaction: {
            header: {
              msg_id:
                data.NISrvRequest.request_account_transaction.header.msg_id,
              msg_type: 'TRANSACTION',
              msg_function: 'REP_ACCOUNT_TRANSACTION',
              src_application: 'BNK',
              target_application: 'WAY4',
              timestamp:
                data.NISrvRequest.request_account_transaction.header.timestamp,
              tracking_id:
                data.NISrvRequest.request_account_transaction.header.msg_id,
              bank_id: 'LOOP',
            },
            exception_details: {
              application_name: 'TCC-ADP',
              date_time:
                data.NISrvRequest.request_account_transaction.header.timestamp,
              status: 'S',
              error_code: '000',
              error_description: 'Success',
              transaction_ref_id:
                data.NISrvRequest.request_account_transaction.header.msg_id,
            },
            body: {
              account_identifier_id:
                data.NISrvRequest.request_account_transaction.body
                  .account_identifier_id,
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
        },
      };
    } catch (error) {
      return error;
    }
  }
  cardNonmon(data: any) {
    try {
      if (Object.keys(data).length === 0) {
        throw new NotFoundException('Data not found');
      }
      return {
        NISrvResponse: {
          response_card_nonmon: {
            header: {
              msg_id: data.NISrvRequest.request_card_nonmon.header.msg_id,
              msg_type: 'TRANSACTION',
              msg_function: 'REP_CARD_NONMON',
              src_application: 'CRM',
              target_application: 'FALCON',
              timestamp: data.NISrvRequest.request_card_nonmon.header.timestamp,
              tracking_id: data.NISrvRequest.request_card_nonmon.header.msg_id,
              bank_id: 'LOOP',
            },
            exception_details: {
              application_name: 'TCC-ADP',
              date_time: data.NISrvRequest.request_card_nonmon.header.timestamp,
              status: 'S',
              error_code: '000',
              error_description: 'Success',
            },
          },
        },
      };
    } catch (error) {
      return error;
    }
  }

  async accountCreate(data: CreateAccountDto) {
    try {
      const accountNo = `000${generateAccountNumber()}`;
      const msgId = data.NISrvRequest.request_account_create.body.customer_id;
      const currency =
        data.NISrvRequest.request_account_create.body.account.currency;
      const account = await this._AccountEntityRepository.create({
        customerId: msgId.toString(),
        accountNumber: accountNo,
        currency: currency,
      });
      await this._AccountEntityRepository.save(account);
      return {
        NISrvResponse: {
          response_account_create: {
            header: {
              msg_id: account.customerId,
              msg_type: 'TRANSACTION',
              msg_function: 'REP_ACCOUNT_CREATE',
              src_application: 'SSP',
              target_application: 'WAY4',
              timestamp: account.createdAt,
              tracking_id: account.customerId,
              bank_id: 'TIQMO',
            },
            exception_details: {
              application_name: 'TCC-ADP',
              date_time: account.createdAt,
              status: 'S',
              error_code: '000',
              error_description: 'Success',
              transaction_ref_id: 'LRQ000000002-1',
            },
            body: {
              account_number: accountNo,
              custom_fields: [
                {
                  key: 'CN-BC_A1',
                  value: '_',
                },
                {
                  key: 'CN-BC_A2',
                  value: '_',
                },
                {
                  key: 'CN-CARD_TARIFF',
                  value: '<<PCT_001>>',
                },
                {
                  key: 'CN-CONTRACT_NAME',
                  value: 'AL SOMALI MOKHTAR ',
                },
                {
                  key: 'CN-CREDIT_LIMIT_AM',
                  value: '0',
                },
                {
                  key: 'CN-DATE_OPEN',
                  value: '2022-05-07',
                },
                {
                  key: 'CN-RBS_NUMBER',
                  value: '100947000000000070',
                },
              ],
            },
          },
        },
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        // Duplicate entry error handling
        return errorMessages.accountAlreadyRegistered;
      }
      return errorMessages.internalServerError;
    }
  }

  async clientCreate(data: CreateClientDto) {
    try {
      const account = await this._AccountEntityRepository.findOne({
        where: {
          customerId: data.NISrvRequest.request_client_create.body.customer_id,
        },
      });
      if (!account) {
        return errorMessages.accountNotFound;
      }
      const client = await this._ClientsEntityRepository.create({
        account: account,
        citizenship:
          data.NISrvRequest.request_client_create.body.personal_details
            .citizenship,
        dateOfBirth:
          data.NISrvRequest.request_client_create.body.personal_details
            .date_of_birth,
        email:
          data.NISrvRequest.request_client_create.body.contact_details.email,
        firstName:
          data.NISrvRequest.request_client_create.body.personal_details
            .first_name,
        lastName:
          data.NISrvRequest.request_client_create.body.personal_details
            .last_name,
        gender:
          data.NISrvRequest.request_client_create.body.personal_details.gender,
        mobileNo:
          data.NISrvRequest.request_client_create.body.contact_details
            .mobile_phone,
      });
      await this._ClientsEntityRepository.save(client);
      return {
        NISrvResponse: {
          response_client_create: {
            header: {
              msg_id: data.NISrvRequest.request_client_create.header.msg_id,
              msg_type: 'TRANSACTION',
              msg_function: 'REP_CLIENT_CREATE',
              src_application: 'SSP',
              target_application: 'WAY4',
              timestamp:
                data.NISrvRequest.request_client_create.header.timestamp,
              tracking_id:
                data.NISrvRequest.request_client_create.header.msg_id,
              bank_id: 'LOOP',
            },
            exception_details: {
              application_name: 'TCC-ADP',
              date_time:
                data.NISrvRequest.request_client_create.header.timestamp,
              status: 'S',
              error_code: '000',
              error_description: 'Success',
            },
            body: {
              customer_id:
                data.NISrvRequest.request_client_create.header.msg_id,
              bank_code: data.NISrvRequest.request_client_create.body.bank_code,
              card_name: data.NISrvRequest.request_client_create.body.card_name,
              card_type: data.NISrvRequest.request_client_create.body.card_type,
              personal_details: {
                gender:
                  data.NISrvRequest.request_client_create.body.personal_details
                    .gender,
                first_name:
                  data.NISrvRequest.request_client_create.body.personal_details
                    .first_name,
                last_name:
                  data.NISrvRequest.request_client_create.body.personal_details
                    .last_name,
                middle_name:
                  data.NISrvRequest.request_client_create.body.personal_details
                    .middle_name,
                citizenship:
                  data.NISrvRequest.request_client_create.body.personal_details
                    .citizenship,
                date_of_birth:
                  data.NISrvRequest.request_client_create.body.personal_details
                    .date_of_birth,
              },
              contact_details: {
                mobile_phone:
                  data.NISrvRequest.request_client_create.body.contact_details
                    .mobile_phone,
                email:
                  data.NISrvRequest.request_client_create.body.contact_details
                    .email,
              },
              addresses: [
                {
                  address_type:
                    data.NISrvRequest.request_client_create.body.addresses[0]
                      .address_type,
                  address_line_1:
                    data.NISrvRequest.request_client_create.body.addresses[0]
                      .address_line_1,
                  city: data.NISrvRequest.request_client_create.body
                    .addresses[0].city,
                  country:
                    data.NISrvRequest.request_client_create.body.addresses[0]
                      .country,
                  zip: data.NISrvRequest.request_client_create.body.addresses[0]
                    .zip,
                },
              ],
              identity_proof_document: [
                {
                  number:
                    data.NISrvRequest.request_client_create.body
                      .identity_proof_document.number,
                  type: data.NISrvRequest.request_client_create.body
                    .identity_proof_document.type,
                  expiry_date:
                    data.NISrvRequest.request_client_create.body
                      .identity_proof_document.expiry_date,
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
        },
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        // Duplicate entry error handling
        return errorMessages.clientAlreadyRegistered;
      }
      return errorMessages.internalServerError;
    }
  }

  accountBalanceEnquiry(data: any) {
    try {
      if (Object.keys(data).length === 0) {
        throw new NotFoundException('Data not found');
      }
      return {
        NISrvResponse: {
          response_account_balance_enquiry: {
            header: {
              msg_id:
                data.NISrvRequest.request_account_balance_enquiry.header.msg_id,
              msg_type: 'ENQUIRY',
              msg_function: 'REP_ACCOUNT_BALANCE_ENQUIRY',
              src_application: 'BNK',
              target_application: 'WAY4',
              timestamp:
                data.NISrvRequest.request_account_balance_enquiry.header
                  .timestamp,
              tracking_id:
                data.NISrvRequest.request_account_balance_enquiry.header.msg_id,
              bank_id: 'LOOP',
            },
            exception_details: {
              application_name: 'TCC-ADP',
              date_time:
                data.NISrvRequest.request_account_balance_enquiry.header
                  .timestamp,
              status: 'S',
              error_code: '000',
              error_description: 'Success',
            },
            body: {
              account_identifier_type: 'CONTRACT_NUMBER',
              account_identifier_id:
                data.NISrvRequest.request_account_balance_enquiry.body
                  .account_identifier_id,
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
        },
      };
    } catch (error) {
      return error;
    }
  }
  p2PTransfer(data: any) {
    try {
      if (Object.keys(data).length === 0) {
        throw new NotFoundException('Data not found');
      }
      return {
        NISrvResponse: {
          response_p_2_p_transfer: {
            header: {
              msg_id: data.NISrvRequest.request_p_2_p_transfer.header.msg_id,
              msg_type: 'TRANSACTION',
              msg_function: 'REP_P2P_TRANSFER',
              src_application: 'BNK',
              target_application: 'WAY4',
              timestamp:
                data.NISrvRequest.request_p_2_p_transfer.header.timestamp,
              tracking_id:
                data.NISrvRequest.request_p_2_p_transfer.header.tracking_id,
              bank_id: 'LOOP',
            },
            exception_details: {
              application_name: 'TCC-ADP',
              date_time:
                data.NISrvRequest.request_p_2_p_transfer.header.timestamp,
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
        },
      };
    } catch (error) {
      return error;
    }
  }

  async getAccountDetails(accountId: string): Promise<AccountEntity> {
    const account = await this._AccountEntityRepository.findOne({
      where: { accountNumber: accountId },
      relations: ['client', 'transactions'],
    });

    if (!account) {
      throw new NotFoundException(`Account with ID ${accountId} not found`);
    }

    return account;
  }
}
