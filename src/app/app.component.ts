import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salaDeJuegos';
  public edadUno: number;
  public edadDos: number;

  public resultadoSuma: number;
  public resultadoProm: number;

  constructor(){}

  ngOnInit() {}
  
  calcular(){
    this.resultadoSuma= this.edadUno + this.edadDos;
    this.resultadoProm = this.resultadoSuma/2;
    console.log(this.edadUno, this.edadDos, this.resultadoProm, this.resultadoSuma);
  }

  limpiar(){

    this.edadUno=null;
    this.edadDos=null;
    this.resultadoProm=null;
    this.resultadoSuma=null;
  }


}
