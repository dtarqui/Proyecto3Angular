import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  src: string;
  position: number;
  alt: string;
  first: boolean;
  last: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
