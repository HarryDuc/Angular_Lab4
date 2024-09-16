import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { B3Component } from './b3/b3.component';
import { B4Component } from './b4/b4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, B1Component, B2Component, B3Component, B4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab4';
}
