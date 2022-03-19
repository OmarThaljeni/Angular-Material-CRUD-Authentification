import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter' 
import { Moment } from 'moment';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatConfirmDialogComponent } from './Components/mat-confirm-dialog/mat-confirm-dialog.component';
import { LoginComponent } from './Components/login/login.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { TableUsersComponent } from './Components/Gestion_des_utilisateurs/table-users/table-users.component';
import { AjoutUserComponent } from './Components/Gestion_des_utilisateurs/ajout-user/ajout-user.component';
import { TableArticlesComponent } from './Components/gestion-des-articles/table-articles/table-articles.component';
import { AjoutArticleComponent } from './Components/gestion-des-articles/ajout-article/ajout-article.component';
import { TableFamillesArticleComponent } from './Components/Gestion_des_familles_article/table-familles-article/table-familles-article.component';
import { AjoutFamillesArticleComponent } from './Components/Gestion_des_familles_article/ajout-familles-article/ajout-familles-article.component';
import { TableFournisseursComponent } from './Components/gestion-des-fournisseurs/table-fournisseurs/table-fournisseurs.component';
import { AjoutFournisseursComponent } from './Components/gestion-des-fournisseurs/ajout-fournisseurs/ajout-fournisseurs.component';
import { TableTaxeComponent } from './Components/Gestion-taxe/table-taxe/table-taxe.component';
import { AjoutTaxeComponent } from './Components/Gestion-taxe/ajout-taxe/ajout-taxe.component';
import { TableElementFacturationComponent } from './Components/gestion-element-facturation/table-element-facturation/table-element-facturation.component';
import { AjoutElementFacturationComponent } from './Components/gestion-element-facturation/ajout-element-facturation/ajout-element-facturation.component';
import { TableTarifComponent } from './Components/gestion-tarif/table-tarif/table-tarif.component';
import { AjoutTarifComponent } from './Components/gestion-tarif/ajout-tarif/ajout-tarif.component';
import { ModifierUserComponent } from './Components/Gestion_des_utilisateurs/modifier-user/modifier-user.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatConfirmDialogComponent,
    AcceuilComponent,
    TableUsersComponent,
    AjoutUserComponent,
    TableArticlesComponent,
    AjoutArticleComponent,
    TableFamillesArticleComponent,
    AjoutFamillesArticleComponent,
    TableFournisseursComponent,
    AjoutFournisseursComponent,
    TableTaxeComponent,
    AjoutTaxeComponent,
    TableElementFacturationComponent,
    AjoutElementFacturationComponent,
    TableTarifComponent,
    AjoutTarifComponent,
    ModifierUserComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    DragDropModule,
    AppRoutingModule,
    MatDialogModule,
    MatMomentDateModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ MatConfirmDialogComponent, AjoutUserComponent, ModifierUserComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
