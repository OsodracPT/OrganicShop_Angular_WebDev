import { Movie } from './../Movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() movie:Movie

  constructor() { }

  ngOnInit() {
  }


}
