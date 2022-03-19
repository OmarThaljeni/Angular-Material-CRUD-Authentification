import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { TableArticlesComponent } from './Components/gestion-des-articles/table-articles/table-articles.component';
import { TableUsersComponent } from './Components/Gestion_des_utilisateurs/table-users/table-users.component';
import { TableFournisseursComponent } from './Components/gestion-des-fournisseurs/table-fournisseurs/table-fournisseurs.component';
import { TableFamillesArticleComponent } from './Components/Gestion_des_familles_article/table-familles-article/table-familles-article.component';
import { TableTaxeComponent } from './Components/Gestion-taxe/table-taxe/table-taxe.component';
import { TableElementFacturationComponent } from './Components/gestion-element-facturation/table-element-facturation/table-element-facturation.component';
import { TableTarifComponent } from './Components/gestion-tarif/table-tarif/table-tarif.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '/GestionAchat/login',pathMatch:'full' },

  {path:'GestionAchat' ,
    children:[
      { path: 'login', component:LoginComponent},
      { path: 'acceuil', component:AcceuilComponent},
      { path: 'liste-users', component:TableUsersComponent},
      { path: 'liste-articles', component:TableArticlesComponent},
      { path: 'liste-familles-article', component:TableFamillesArticleComponent},
      { path: 'liste-fournisseurs', component:TableFournisseursComponent},
      { path: 'liste-taxe', component:TableTaxeComponent},
      { path: 'liste-element-facturation', component:TableElementFacturationComponent},
      { path: 'liste-tarif', component:TableTarifComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
