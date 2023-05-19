import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaAgregarComponent } from './components/persona-agregar/persona-agregar.component';
import { PersonaGetComponent } from './components/persona-get/persona-get.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './servicios/persona.service';
import { MaterialModule } from './modulos/material/material.module';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { LoginModule } from './modulos/login/login.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppStoreModule } from './modulos/app-store/app-store.module';
import { UsersModule } from './modulos/users/users.module';
import { UsersPageComponent } from './modulos/users/pages/users-page/users-page.component';
import { UsersStorageModule } from './modulos/users/users-store.module';


@NgModule({
  declarations: [
    AppComponent,
    PersonaAgregarComponent,
    PersonaGetComponent,
    PersonaEditarComponent,
    ToolbarComponent,
    NavbarComponent,
    PrincipalComponent,
    CarruselComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule, 
    LoginModule,
    RouterModule, 
    AppStoreModule,
    UsersModule,
    UsersStorageModule
   ],
   exports:[UsersModule],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
