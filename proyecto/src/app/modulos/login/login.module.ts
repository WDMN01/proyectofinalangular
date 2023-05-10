import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'src/app/guards/auth-guard.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, 
  ],
  exports: [LoginComponent],
  providers: [AuthGuardGuard]
})
export class LoginModule { 
  
}
