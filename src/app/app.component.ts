import { data } from './mock-data';
import { Component } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'oshop';
  
  currentMovie:Movie = data[0]
}
