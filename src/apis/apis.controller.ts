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
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('CardServices')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}

  @Post('/Transaction/V2/AccountTransaction')
  async accountTransaction(@Req() req, @Res() res) {
    const data = await this.apisService.accountTransaction();
    const customHeaderValue = JSON.stringify(
      data.response_account_transaction.header,
    );
    res.setHeader('X-Custom-Header', customHeaderValue);
    return res.json(data.response_account_transaction.body);
  }

  @Post('/Transaction/V2/CardNonmon')
  async cardNonmon(@Req() req, @Res() res) {
    const data = await this.apisService.cardNonmon();
    const customHeaderValue = JSON.stringify(data.response_card_nonmon.header);
    res.setHeader('X-Custom-Header', customHeaderValue);
    return res.json({});
  }

  @Post('/Transaction/V2/ClientCreate')
  async clientCreate(@Req() req, @Res() res) {
    const data = await this.apisService.clientCreate();
    const customHeaderValue = JSON.stringify(
      data.response_client_create.header,
    );
    res.setHeader('X-Custom-Header', customHeaderValue);
    return res.json(data.response_client_create.body);
  }

  @Post('/Enquiry/V2/AccountBalanceEnquiry')
  async accountBalanceEnquiry(@Req() req, @Res() res) {
    const data = await this.apisService.accountBalanceEnquiry();
    const customHeaderValue = JSON.stringify(
      data.response_account_balance_enquiry.header,
    );
    res.setHeader('X-Custom-Header', customHeaderValue);
    return res.json(data.response_account_balance_enquiry.body);
  }

  @Post('/Transaction/V2/P2PTransfer')
  async p2PTransfer(@Req() req, @Res() res) {
    const data = await this.apisService.p2PTransfer();
    const customHeaderValue = JSON.stringify(
      data.response_p_2_p_transfer.header,
    );
    res.setHeader('X-Custom-Header', customHeaderValue);
    return res.json(data.response_p_2_p_transfer.body);
  }
}
