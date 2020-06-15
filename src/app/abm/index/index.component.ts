import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Producto[] = [];

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe((data: Producto[]) => {
      this.posts = data;
      console.log(this.posts);
    })
  }

  deletePost(id) {
    this.productoService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Post deleted successfully!');
    })
  }

}