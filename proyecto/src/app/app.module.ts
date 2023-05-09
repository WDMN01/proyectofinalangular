import { NgModule } from '@angular/core';
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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule, 
    LoginModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
