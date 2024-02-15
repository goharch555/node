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
    return res.json(data);
  }

  @Post('/Transaction/V2/CardNonmon')
  async cardNonmon(@Req() req, @Res() res) {
    const data = await this.apisService.cardNonmon();
    return res.json(data);
  }

  @Post('/Transaction/V2/ClientCreate')
  async clientCreate(@Req() req, @Res() res) {
    const data = await this.apisService.clientCreate();
    return res.json(data);
  }

  @Post('/Enquiry/V2/AccountBalanceEnquiry')
  async accountBalanceEnquiry(@Req() req, @Res() res) {
    const data = await this.apisService.accountBalanceEnquiry();
    return res.json(data);
  }

  @Post('/Transaction/V2/P2PTransfer')
  async p2PTransfer(@Req() req, @Res() res) {
    const data = await this.apisService.p2PTransfer();
    return res.json(data);
  }
}
