import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const login = 'http://localhost:8081/GestionAchat/sign-in'



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http : HttpClient, private router : Router) { }

  isLoggedIn(){
    let token = localStorage.getItem('token') || sessionStorage.getItem("token");
    if(token){
      return true
    }else{
      return false
    }
  }

  login(credentials) {
    return this.http.post(login,credentials);
  }

  
  logout() {
    localStorage.removeItem('token');

  }


  getToken(): string {
    return localStorage.getItem('token');
  }
  
  



}
