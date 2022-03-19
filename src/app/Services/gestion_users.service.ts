
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

const liste_Users = 'http://localhost:8081/GestionAchat/Liste_Users'

const suppUser = 'http://localhost:8081/GestionAchat/Supprimer_User'

const api_Ajout_User = 'http://localhost:8081/GestionAchat/Ajouter_User'

const api_Modifier_User = 'http://localhost:8081/GestionAchat/Modifier_User'



@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {

  constructor(private http: HttpClient) { }



  ListerTousUsers() {
    return this.http.get(liste_Users);
  }

  SupprimerUser(id): Observable<any> {
    return this.http.delete(`${suppUser}/${id}`);
  }

  AjouterUser(user): Observable<any> {
    return this.http.post(api_Ajout_User, user);

  }


  ModifierUser(id,utilisateur): Observable<any> {
    return this.http.put(`${api_Modifier_User}/${id}`,utilisateur);
  }





}
