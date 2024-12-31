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
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

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
  create(@Body() createCoffeeDto: CreateCoffeeDto): any {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto): any {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.coffeesService.remove(id);
  }
}
