import { Component, OnInit } from '@angular/core';
import {Movie} from  './../Movie';
import { data } from './../mock-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults:Movie[] = data

  constructor() { }

  ngOnInit() {
  }

}
