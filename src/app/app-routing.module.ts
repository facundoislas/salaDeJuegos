import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Componentes/error/error.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { JuegoComponent } from './Vistas/juego/juego.component';


const routes: Routes = [
  {path:'juego', component: JuegoComponent},
  {path:'quienSoy', component: QuienSoyComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: HomeComponent},
//para cualquier ruta ingresa a este path
{path:'**', component: ErrorComponent}//siempre tiene que ir ultimo



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
