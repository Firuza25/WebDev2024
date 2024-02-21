import { Injectable } from '@angular/core';
import { Sneakers, sn_products } from '../../shared/models/Sneakers';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor() { }

  getAll(): Sneakers[] {
      return sn_products;
  }
}
