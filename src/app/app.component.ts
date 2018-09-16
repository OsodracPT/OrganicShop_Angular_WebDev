import { MovieService } from './movie.service';
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
  
  currentMovie:Movie = null

  constructor(private movieService:MovieService){
    movieService
    .currentMovie
    .subscribe(movie=>{this.currentMovie=movie
    })
  }

  startNewSearch(){
    this.movieService.changeSelectedMovie(null)
  }
}
