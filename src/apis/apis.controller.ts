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
// import { UpdateApiDto } from './dto/update-api.dto';

@Controller('CardServices')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}

  @Post('/Transaction/V2/AccountTransaction')
  async accountTransaction(@Req() req, @Res() res) {
    const data = await this.apisService.accountTransaction(req.body);
    return res.json(data);
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
}
//
