import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/Entidades/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario:Usuario;
  todosLosUsuarios : Usuario[];
  dbUsuarios: Observable<any[]>;
  Mensaje:string;
  flag:boolean;

  clase="progress-bar progress-bar-info progress-bar-striped ";


  constructor(private db: AngularFirestore, private auth : AuthService,  private router : Router) { 

    this.usuario = new Usuario();
    this.dbUsuarios = this.db.collection('Usuarios').valueChanges();
          this.todosLosUsuarios = new Array();
          this.ObtenerUsuarios();
  }

  ngOnInit() {
    }

    existeUsuario()
  {
    this.todosLosUsuarios.forEach(element =>{

      if(element.email == this.usuario.email)
      {//console.log("entre")
              this.flag=false;
      }
      else
      {
        
        this.flag=true;

      }
    })
    return this.flag
  }

  enviar()
  {
    this.usuario.tipo = "invitado";
    //this.usuario.email = "cliente - "+this.usuario.email;
    console.log(this.usuario); 


    if(this.existeUsuario()){
    this.db.collection("Usuarios").doc("cliente - " + this.usuario.email).set({

      email: this.usuario.email,
      //clave: this.usuario.clave,
      tipo: "invitado",
      //id: "cliente - "+this.usuario.email,
      //foto:  "cliente - "+this.usuario.email,
      nombre: this.usuario.nombre,
    })
    .then(function(docRef) {
      console.log("Se guarda el usuario en base ");
     
  })
  .catch(function(error) {
      alert("Error al registrarse, realizarlo nuevamente")
      console.error("Error al escribir el usuario", error);
    });

    this.auth.registerUser(this.usuario.email,this.usuario.clave)
    .then((usuario) => {
      console.log("Alta exitosa");
      console.log(this.usuario);
      sessionStorage.setItem('user', this.usuario.email);
      sessionStorage.setItem('tipo', "invitado");
      sessionStorage.setItem('nombre', this.usuario.nombre);
      this.router.navigate(['home']);
    })
    .catch(err=>{
     console.log("No se ha podido registrar el usuario");
     if(this.existeUsuario())
     {console.log(this.flag);
     this.MostarMensaje("El usuario ya existe",true)}
    })}
    
  }

  ObtenerUsuarios(){
    this.dbUsuarios.forEach(element => {

      //console.info(element);

      element.forEach(usuario => {

        let unUsr = new Usuario();

        unUsr.email = usuario.email;
        unUsr.tipo = usuario.tipo;
        unUsr.nombre = usuario.nombre;

        this.todosLosUsuarios.push(unUsr);
        
      });

      console.info(this.todosLosUsuarios);
      console.log("usuario",this.todosLosUsuarios);
      
    });
  }

  MostarMensaje(mensaje:string,gano:boolean) {
    this.Mensaje = mensaje;
   var x = document.getElementById("snackbar");
   if(gano)
       x.className = "show Ganador";
   var modelo = this;
   setTimeout(function(){ 
     x.className = x.className.replace("show", "");
     //modelo.ocultarVerificar=false;
    }, 3000);
   console.info("objeto",x);
 
  } 
  
}

