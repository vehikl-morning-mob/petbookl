import {Controller, Get, Header, HttpCode, Param, Post, Redirect} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  find() {
    return 'This route uses a wildcard';
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  findSomething() {
    return 'This route uses a redirect';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
