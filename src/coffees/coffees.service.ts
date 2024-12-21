import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];
  findAll(): Coffee[] {
    return this.coffees;
  }
  findOne(id: number): Coffee | any {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      throw new HttpException(`Cannot find ${id}`, HttpStatus.BAD_REQUEST);
    }
    return coffee;
  }
  create(coffee: any): any {
    this.coffees.push(coffee);
  }
  update(id: number, coffee: any): any {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update the existing entity
    }
  }
  remove(id: number): void {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
