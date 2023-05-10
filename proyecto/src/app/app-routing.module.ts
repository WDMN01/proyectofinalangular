import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaAgregarComponent } from './components/persona-agregar/persona-agregar.component';
import { PersonaGetComponent } from './components/persona-get/persona-get.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


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
    path: 'cursos', component: CursosComponent, canActivate: [AuthGuardGuard]
  },
  { path: 'login', loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
