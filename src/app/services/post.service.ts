import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
