import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b3',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './b3.component.html',
  styleUrl: './b3.component.css'
})
export class B3Component {
  searchString: any
  articles_array: any[] = []
  articles: any[] = [
    {
      "title": "Taya Bánh Mì đen",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-23.jpg"
    },
    {
      "title": "Bánh mì nướng",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-22.jpg"
    },
    {
      "title": "Hạnh Nhân nướng",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-24.jpg"
    },
    {
      "title": "Bready cuộn nhân dừa",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-25.jpg"
    },
    {
      "title": "Muffin cam hạnh nhân",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-26.jpg"
    },
    {
      "title": "Đan mạch ca dé",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-27.jpg"
    },
    {
      "title": "Baguette ngũ hạt dài",
      "url": "https://abcbakery.co",
      "image": "./assets/images/bakery-28.jpg"
    }
  ]

  filterName() {
    this.articles_array = this.articles;
    var str = this.searchString;

    if (!str) {
      return this.articles_array;
    }
    str = str.trim().toLowerCase();

    this.articles_array = this.articles_array.filter(function (item) {
      if (item.title.toLowerCase().indexOf(str) !== -1) {
        return item;
      }
    })
    return this.articles_array;
  }
}
