import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaAgregarComponent } from './components/persona-agregar/persona-agregar.component';
import { PersonaGetComponent } from './components/persona-get/persona-get.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'persona/agregar',
    component: PersonaAgregarComponent
  },
  {
    path: 'persona/editar/:id',
    component: PersonaEditarComponent
  },
  {
    path: 'persona',
    component: PersonaGetComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
