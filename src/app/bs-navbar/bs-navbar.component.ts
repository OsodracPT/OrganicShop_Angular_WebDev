import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() startNewSearch = new EventEmitter()
}
