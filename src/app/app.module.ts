import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ErrorComponent } from './Componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
