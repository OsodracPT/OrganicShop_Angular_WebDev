import { Subject } from 'rxjs/Subject';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import {Movie} from  './../Movie';
import { data } from './../mock-data';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounce'
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults:Movie[] = data
  
  search$:Subject<String> = new Subject<string>()
  fetching:boolean = false
  search:string

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.search$
    .pipe(debounceTime(500))
    .map(query=>{
      this.fetching = true
      return query
    })
    .subscribe(this.searchQuery.bind(this))
  }

  searchQuery(query:string){
    console.log(query)
  }

  setCurrentMovie(movie:Movie){
    this.movieService.changeSelectedMovie(movie)
  }
}
