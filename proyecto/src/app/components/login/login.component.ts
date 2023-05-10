import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public myForm: FormGroup;
  constructor(private fb:FormBuilder, private loginprd:AutenticacionService){}

  ngOnInit(): void{
    this.myForm = this.createMyForm();
  }
  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
      return;
    }
  
    if(!this.loginprd.ingresarAplicativo(this.myForm.value)){
      alert("usuario o contraseña invalido")
    }
  }

  public get f(): any{
    return this.myForm.controls;
  }

}
