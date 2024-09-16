import { Component } from '@angular/core';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-b4',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './b4.component.html',
  styleUrl: './b4.component.css',
})
export class B4Component {

  Products: Product[] = [
    {
      name: 'iPhone9',
      price: 700,
      quantity: 0,
      active: false,
    },
    {
      name: 'Samsung',
      price: 400,
      quantity: 0,
      active: false,
    },
    {
      name: 'Nokia',
      price: 100,
      quantity: 0,
      active: false,
    },
    {
      name: 'Sony Xperia',
      price: 450,
      quantity: 0,
      active: false,
    },
    {
      name: 'Motorola',
      price: 180,
      quantity: 0,
      active: false,
    },
    {
      name: 'Oppo',
      price: 600,
      quantity: 0,
      active: false,
    },
    {
      name: 'bPhone',
      price: 90,
      quantity: 0,
      active: false,
    },
  ];

  Total() {
    var sum = 0;
    this.Products.forEach((item) => {
      if (item.active == true) {
        sum += item.price * item.quantity
      }
    })
    return sum;
  }
  option: boolean = false;
  checkedAll() {
    this.Products.forEach((item) => {
      item.active = this.option;
    })
  }
  choice: any = '';
  filterprice() {
    // console.log(this.choice)
    if (this.choice == 'Price level') {
      return this.Products;
    }
    else if (this.choice < 200) {
      return this.Products.filter(function (item) {
        return item.price < 200
      })
    }
    else if (this.choice > 500) {
      return this.Products.filter(item => {
        return item.price > 500
      })
    }
    else {
      return this.Products.filter(item => {
        return (item.price >= 200 && item.price <= 500)
      })
    }
  }
}
