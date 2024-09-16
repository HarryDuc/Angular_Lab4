import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './b1.component.html',
  styles: `
    * {
    margin: 0;
    padding: 0;
    }

    body {
        font: 15px/1.3 'Open Sans', sans-serif;
        color: #5e5b64;
        text-align: center;
    }

    a,
    a:visited {
        outline: none;
        color: #389dc1;
    }

    a:hover {
        text-decoration: none;
    }
    section,
    footer,
    header,
    aside,
    nav {
        display: block;
    }
    .form {
        background-color: #61a1bc;
        border-radius: 2px;
        box-shadow: 0 1px 1px #ccc;
        width: 400px;
        padding: 35px 60px;
        margin: 50px auto;
    }
    .form h1 {
        color: #fff;
        font-size: 64px;
        text-align: center;
        font-family: 'Cookie', cursive;
        font-weight: normal;
        line-height: 1;
        text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
    }
    .form ul {
        list-style: none;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        margin: 20px 0 15px;
    }
    .form ul li {
        padding: 20px 30px;
        background-color: #e35885;
        margin-bottom: 8px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    .form ul li span {
        float: right;
    }

    .form ul li.active {
        background-color: #8ec16d;
    }
    div.total {
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        padding: 15px 30px;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        color: #fff;
    }
    div.total span {
        float: right;
    }

  `,
})
export class B1Component {
  Service: any[] = [
    {
      name: 'Chocolate freeze',
      price: 69,
      active: false,
    },
    {
      name: 'Phindi Hanh Nhan',
      price: 50,
      active: false,
    },
    {
      name: 'Ca Phe Sua',
      price: 40,
      active: false,
    },
    {
      name: 'Tra sen vang',
      price: 40,
      active: false,
    },
  ];

  Total() {
    var sum = 0;
    this.Service.forEach((item) => {
      if (item.active) {
        sum += item.price;
      }
    });
    return sum;
  }
  option(item: any) {
    item.active = !item.active;
  }
}
