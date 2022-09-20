import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  public loginUser(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email, password)
      .then(user=>Promise.resolve(user))
      .catch(err=>Promise.reject(err))
  }

  public get Session(){
    return this.auth.authState;
   }

   public logout(){
    this.auth.signOut().then(()=>{
      // hemos salido
    })}

    registerUser(email:string, password:string){
      return this.auth.createUserWithEmailAndPassword( email, password)
      .then((res)=>{
       console.log("el usuario se ha creado exitosamente")
      })
      .catch(err=>Promise.reject(err))
   }
}
