import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findall(): Coffee[] {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Coffee {
    const coffee = this.coffeesService.findOne(id);
    return coffee;
  }

  @Post()
  create(@Body() body): any {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: any): any {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.coffeesService.remove(id);
  }
}
