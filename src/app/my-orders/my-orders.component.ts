import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),

  });

  constructor() { }

  ngOnInit() {
  }

}
