import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApisService } from './apis.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('CardServices')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}

  @Get('/Transaction/V2/AccountTransaction')
  accountTransaction() {
    return this.apisService.accountTransaction();
  }

  @Get('/Transaction/V2/CardNonmon')
  cardNonmon() {
    return this.apisService.cardNonmon();
  }
  @Get('/Transaction/V2/ClientCreate')
  clientCreate() {
    return this.apisService.clientCreate();
  }
  @Get('/Enquiry/V2/AccountBalanceEnquiry')
  accountBalanceEnquiry() {
    return this.apisService.accountBalanceEnquiry();
  }
  @Get('/Transaction/V2/P2PTransfer')
  p2PTransfer() {
    return this.apisService.p2PTransfer();
  }
}
