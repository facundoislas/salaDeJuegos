import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable, Subscription, timer} from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/Entidades/usuario';
import { element } from 'protractor';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuario:Usuario;
  dbUsuarios: Observable<any[]>;
  private subscription: Subscription;
  tipoUser:string;
  //user= { email : '', clave : ''};
  Mensaje:string;
  semuestra:boolean;
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  logueado:boolean;
  ProgresoDeAncho:string;
  todosLosUsuarios : Usuario[];

  clase="progress-bar progress-bar-info progress-bar-striped ";


  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    public auth : AuthService) { 
      this.usuario = new Usuario();
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      const session = sessionStorage.getItem('usuario');
    

          if(session==null)
          {
          this.logueado=false;
          }
          else{
          this.logueado=true;  
          }

          this.dbUsuarios = this.db.collection('Usuarios').valueChanges();
          this.todosLosUsuarios = new Array();
          this.ObtenerUsuarios();
  
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

  ngOnInit() {
  }

  Entrar() {
    this.auth.loginUser(this.usuario.email,this.usuario.clave ).then((user) => {
      this.router.navigate(['/home']);
      sessionStorage.setItem("user",this.usuario.email);
      sessionStorage.setItem("muestra","true");
      }
    )
     .catch(async err=>{
     
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.MostarMensaje("Error al loguearse", true);
      this.logeando = true;
      });

      console.log(this.usuario.email);

      this.logueo();
      this.todosLosUsuarios.forEach(element =>{

        if(element.email == this.usuario.email)
        {//console.log("entre")
       
      
            sessionStorage.setItem('nombre', element.nombre);
            console.log(sessionStorage.getItem('nombre'));
        }
        else
        {console.log("no entre")}
      })
  }

  admin()
    {
      this.usuario.email="admin@salajuegos.com";
        this.usuario.clave="Sala1234";
    }

    invitado()
    {
      this.usuario.email="invitado@gmail.com";
        this.usuario.clave="1234Sala";
    }

    borrar(){
      this.usuario.email=null;
      this.usuario.clave=null;
    }

    logueo()
     {
       let fecha = Date.now();
       let email = this.usuario.email;

       this.db.collection("logueos").add({

        email: email,
        fecha: fecha
  
      })
      .then(function(docRef) {
        console.log("SSe guardo el logueo");
        
       
    })
    .catch(function(error) {
        console.log("Error al registrar el logueo")
        
    });

     }


     /*MoverBarraDeProgreso() {
      //if(this.verificarCodigo())
      //{
       this.logeando=false;
       this.clase="progress-bar progress-bar-danger progress-bar-striped active";
       this.progresoMensaje="Iniciando comprobacion"; 
       let timer: Observable<number> = timer(200,50);
       this.subscription = timer.subscribe(t => {
         console.log("inicio");
         this.progreso=this.progreso+1;
         this.ProgresoDeAncho=this.progreso+20+"%";
         switch (this.progreso) {
           case 15:
           this.clase="progress-bar progress-bar-warning progress-bar-striped active";
           this.progresoMensaje="Verificando Usuario..."; 
             break;
           case 30:
             this.clase="progress-bar progress-bar-Info progress-bar-striped active";
             this.progresoMensaje="Verificando contraseña.."; 
             break;
             case 60:
             this.clase="progress-bar progress-bar-success progress-bar-striped active";
             this.progresoMensaje="Recompilando Info del dispositivo..";
             break;
             case 75:
             this.clase="progress-bar progress-bar-success progress-bar-striped active";
             this.progresoMensaje="Desencriptacion de clave ..";
             break;
             case 85:
             this.clase="progress-bar progress-bar-success progress-bar-striped active";
             this.progresoMensaje="Clave ok, ingresando..";
             break;
             
           case 100:
             console.log("final");
             this.subscription.unsubscribe();
             this.Entrar();
             break;
         }     
       });
     }*/

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
