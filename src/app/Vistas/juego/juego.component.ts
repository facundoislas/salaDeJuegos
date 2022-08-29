import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public variable:string;
  public variable2:string;

  usuario:Usuario = new Usuario()
  constructor() {

    this.variable = '';
    this.variable2= '';
   }

  ngOnInit() {

    this.variable ="facundo";
    this.variable2 ="Ezequiel";
    console.log(this.variable);

  }

  Aceptar():void{

    /**console.log(this.usuario.nombre);
    console.log(this.usuario.apellido);**/
    console.log(this.usuario);
  }

}
