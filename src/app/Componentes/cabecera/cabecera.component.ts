import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
 logueado:boolean;
 nombre:string;

  

  constructor( public auth : AuthService,
           private router: Router,
           private route: ActivatedRoute
           ) 
           {
            }
    verificarSesion()
    {
      const session = sessionStorage.getItem('user');
      

            if(session==null)
            {
            return false;
            }
            else{
              this.nombre = sessionStorage.getItem('nombre');
            return true;  
            }
    }

    cerrarSesion(){
      
      this.auth.logout();
      sessionStorage.clear();
      this.logueado=false;
      this.router.navigate(['/login']);
      console.log("Se cierra sesion");
    }

  ngOnInit() {
  }


}
