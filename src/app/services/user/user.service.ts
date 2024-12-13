import { Injectable } from '@angular/core';
import {LoginComponent} from "../../components/login/login.component";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private router : Router) { }


  login(username: string){
    localStorage.setItem('login', username);
    this.router.navigate(['home']);
  }


  logout(){
    localStorage.removeItem('login');
    this.router.navigate(['']);

  }
}
