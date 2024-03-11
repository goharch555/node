import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { ApisService } from './apis.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { TransactionDto } from './dto/transaction.dto';
// import { UpdateApiDto } from './dto/update-api.dto';

@Controller('CardServices')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}

  @Post('/Transaction/V2/AccountTransaction')
  async accountTransaction(@Body() transactionDto: TransactionDto, @Res() res) {
    const data = await this.apisService.accountTransaction(transactionDto);
    return res.json(data);
  }

  @Post('/check-server')
  async checkServer(@Req() req, @Res() res) {
    return res.json({message: "Server is up"});
  }

  @Post('/Transaction/V2/CardNonmon')
  async cardNonmon(@Req() req, @Res() res) {
    const data = await this.apisService.cardNonmon(req.body);
    return res.json(data);
  }

  @Post('/Transaction/V2/ClientCreate')
  async clientCreate(@Body() createClientDto: CreateClientDto, @Res() res) {
    const data = await this.apisService.clientCreate(createClientDto);
    return res.json(data);
  }

  @Post('/Transaction/V2/AccountCreate')
  async accountCreate(@Body() createAccountDto: CreateAccountDto, @Res() res) {
    const data = await this.apisService.accountCreate(createAccountDto);
    return res.json(data);
  }

  @Post('/Enquiry/V2/AccountBalanceEnquiry')
  async accountBalanceEnquiry(@Req() req, @Res() res) {
    const data = await this.apisService.accountBalanceEnquiry(req.body);
    return res.json(data);
  }

  @Post('/Transaction/V2/P2PTransfer')
  async p2PTransfer(@Req() req, @Res() res) {
    const data = await this.apisService.p2PTransfer(req.body);
    return res.json(data);
  }
  @Get(':id')
  async getAccountDetails(@Param('id') accountId: string) {
    try {
      const accountDetails =
        await this.apisService.getAccountDetails(accountId);
      return { success: true, data: accountDetails };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post(':id/update-balance/:operation')
  async updateBalance(
    @Param('id') accountId: string,
    @Param('operation') operation: 'deposit' | 'withdraw',
    @Body('amount') amount: number,
  ) {
    try {
      const updatedAccount = await this.apisService.updateBalance(
        accountId,
        amount,
        operation,
      );
      return { message: 'Balance updated successfully', data: updatedAccount };
    } catch (error) {
      return { error: error.message };
    }
  }
}
//
