import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosVistaComponent } from './articulos/articulos-vista/articulos-vista.component';
import { RegisterArticuloComponent } from './articulos/register-articulo/register-articulo.component';
import { LoginUsuariosComponent } from './auth/login-usuarios/login-usuarios.component';
import { RegisterClientesComponent } from './auth/register-clientes/register-clientes.component';
import { RegisterEmpleadosComponent } from './auth/register-empleados/register-empleados.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginUsuariosComponent
  },
  {
    path: 'register-empleado',
    component: RegisterEmpleadosComponent
  },
  {
    path: 'register-cliente',
    component: RegisterClientesComponent
  },
  {
    path: 'register-articulo',
    component: RegisterArticuloComponent
  },
  /*{
    path: 'carrito',
    component: CarritoComponent
  },*/
  {
    path: 'articulo',
    component: ArticulosVistaComponent
  }, {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
