import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';  


@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {

  producto:Productos = new Productos(0,"",0,"",0);
  id:number;

  constructor(private router:Router,private productoService:ProductosService,private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.productoService.get(this.id).subscribe(
      p=>this.producto = p
    )
    
  }

  create():void {
      this.router.navigate(['/productos']);
  }

}
