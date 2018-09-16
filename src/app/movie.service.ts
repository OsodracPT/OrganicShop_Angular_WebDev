import { query } from '@angular/core/src/render3/query';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from './Movie';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject'


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  private selectedMovie$:Subject<Movie> = new Subject<Movie>()
  private apiKey:string = "60e8fff5bb14815e4722975d110740c5"
  private baseApiUrl:string = "https://api.themoviedb.org/3/search/movie"

  constructor(private http:HttpClient) { }

  get currentMovie(){
    return this.selectedMovie$
  }

  searchMovie(query:string){
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query)
    return this.http.get<any>(this.baseApiUrl, {params}).map (res => res.results)
  }

  changeSelectedMovie(movie:Movie){
    this.selectedMovie$.next(movie)
  }

}
