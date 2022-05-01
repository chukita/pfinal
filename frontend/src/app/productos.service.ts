import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = "https://61edb56a634f2f00170ced07.mockapi.io/productos";

  constructor(private http:HttpClient) { }

  //traiga todo

  getAll():Observable<Productos[]>{ 
    return this.http.get<Productos[]>(this.url); 
  }

  //traiga uno solo

  get(id:number):Observable<Productos>{ 
    return this.http.get<Productos>(this.url+"/"+id); 
  }

  //modifique

  //elimine

  //cree


}
