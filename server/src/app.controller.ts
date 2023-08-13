import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePropertyModel } from './models/property.model';



@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('properties')
  getProperties(): {} {
    return this.appService.getProperties();
  }

  @Post('properties')
  createProperty(@Body() body: CreatePropertyModel): {} {
    return this.appService.createProperty(body);
  }
}
