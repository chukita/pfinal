import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductosComponent } from './form-productos/form-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'loginn', component : LoginComponent},
  {path : 'productos', component : ProductosComponent},
  {path : 'form', component : FormProductosComponent},
  {path : 'form/:id', component : FormProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
