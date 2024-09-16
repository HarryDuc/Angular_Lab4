import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-b2',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './b2.component.html',
  styleUrl: './b2.component.css'
})
export class B2Component {
  layout: string = 'grid';
  articles: any[] = [
    {
      "title": "Taya Bánh Mì đen",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-23.jpg",
        "small": "./assets/images/bakery-23.jpg"
      }
    },
    {
      "title": "Bánh mì nướng",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-22.jpg",
        "small": "./assets/images/bakery-22.jpg"
      }
    },
    {
      "title": "Hạnh Nhân nướng",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-24.jpg",
        "small": "./assets/images/bakery-24.jpg"
      }
    },
    {
      "title": "Bready cuộn nhân dừa",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-25.jpg",
        "small": "./assets/images/bakery-25.jpg"
      }
    },
    {
      "title": "Muffin cam hạnh nhân",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-26.jpg",
        "small": "./assets/images/bakery-26.jpg"
      }
    },
    {
      "title": "Đan mạch ca dé",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-27.jpg",
        "small": "./assets/images/bakery-27.jpg"
      }
    },
    {
      "title": "Baguette ngũ hạt dài",
      "url": "https://abcbakery.co",
      "image": {
        "large": "./assets/images/bakery-28.jpg",
        "small": "./assets/images/bakery-28.jpg"
      }
    }
  ]
}
