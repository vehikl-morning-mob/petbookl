import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  // @Res() -- docs library specific response object
  async create(@Body() createCatDto: CreateCatDto): Promise<any> {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
