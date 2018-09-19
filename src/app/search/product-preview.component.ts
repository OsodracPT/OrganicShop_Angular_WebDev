import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../Movie';


@Component({
  selector: 'product-preview',
  templateUrl: './product-preview.component.html',
  styles: []
})
export class ProductPreviewComponent implements OnInit {

  @Input() movie:Movie = {}

  constructor() { }

  ngOnInit() {
  }

  backdropStyle = ()=>({
    'background': `linear-gradient(180deg, rgba(0,0,0,.7), transparent), url(${this.movie.backdropUrl})`,
    'background-size':'cover'
  })

}
