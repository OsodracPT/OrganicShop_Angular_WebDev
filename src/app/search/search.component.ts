import { Subject } from 'rxjs/Subject';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import {Movie} from './../Movie';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: Movie[] = [];

  search$: Subject<String> = new Subject<string>();
  fetching = false;
  search: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.search$
    .pipe(debounceTime(500))
    .map(query => {
      this.fetching = true;
      return query;
    })
    .subscribe(this.searchQuery.bind(this));
  }

  searchQuery(query: string) {
    if (query.length > 0) {
      this.movieService.searchMovie(query)
                      .subscribe((results) => {
                        this.fetching = false;
                        this.searchResults = results;
                      });
    } else {
      this.fetching = false;
      this.searchResults = [];
    }
  }

  setCurrentMovie(movie: Movie) {
    this.movieService.changeSelectedMovie(movie);
  }
}
