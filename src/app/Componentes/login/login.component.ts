import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription, timer} from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  tipoUser:string;
  user= { email : '', password : ''};
  Mensaje:string;
  semuestra:boolean;
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  logueado:boolean;
  ProgresoDeAncho:string;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
    public auth : AuthService) { 

      this.progreso=0;
      this.ProgresoDeAncho="0%";
      const session = sessionStorage.getItem('user');
    

          if(session==null)
          {
          this.logueado=false;
          }
          else{
          this.logueado=true;  
          }
  
    }

  ngOnInit() {
  }

  Entrar() {
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      this.router.navigate(['/home']);
      sessionStorage.setItem("user",this.user.email);
      sessionStorage.setItem("muestra","true");
      }
    )
     .catch(async err=>{
     
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      //this.MostarMensaje("Error al loguearse", true);
      this.logeando = true;
      });

      console.log(this.user.email);

      this.logueo();
    
  }

  admin()
    {
      this.user.email="admin@salajuegos.com";
        this.user.password="Sala1234";
    }

    invitado()
    {
      this.user.email="invitado@gmail.com";
        this.user.password="1234Sala";
    }

    borrar(){
      this.user.email=null;
      this.user.password=null;
    }

    logueo()
     {
       let fecha = Date.now();
       let email = this.user.email;

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

}
