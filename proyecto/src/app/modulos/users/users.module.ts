import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AppModule } from 'src/app/app.module';
import { PrincipalComponent } from 'src/app/components/principal/principal.component';



@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[UsersPageComponent]
})
export class UsersModule { }
