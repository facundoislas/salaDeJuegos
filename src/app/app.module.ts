import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Componentes/login/login.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { HomeComponent } from './Componentes/home/home.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MenuPrincipalComponent } from './Componentes/menu-principal/menu-principal.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from './servicios/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
    CabeceraComponent,
    FooterComponent,
    MenuPrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }