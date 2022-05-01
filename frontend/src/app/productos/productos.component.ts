import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ListaProductos:Productos[] = [new Productos(0,"",0,"",0)]; 
  ulogged:string = "";

  constructor(private productoservice:ProductosService,public LoginService: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.productoservice.getAll().subscribe(
      e=>this.ListaProductos = e
    )
    this.ulogged = this.LoginService.getUserLogged();
  }

  salir():void {
    this.LoginService.deleteToken();
    this.ulogged = "";
  }

  loggin():void {
  
    this.router.navigate(['/loginn'])
  }


}
