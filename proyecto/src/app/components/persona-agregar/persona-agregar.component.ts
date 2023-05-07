import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona-agregar',
  templateUrl: '../../shared/persona-form.component.html',
  styleUrls: ['./persona-agregar.component.css']
})
export class PersonaAgregarComponent  implements OnInit{
  
  mainFormGroup:FormGroup;
  constructor(private router: Router,
    private personaService: PersonaService,
    private formBuilder: FormBuilder){

      this.mainFormGroup =formBuilder.group({
        Nombre: ["", Validators.required],
        Apellido: ["", Validators.required],
      });}
  
  ngOnInit(): void {
    
  }
  submitForm(){
    var persona:Persona={
      id: null,
      Nombre: this.mainFormGroup.controls["Nombre"].value,
      Apellido: this.mainFormGroup.controls["Apellido"].value,
    };      
  
    this.personaService.add(persona).subscribe((resp)=>{
      this.router.navigate(["/persona/"])
    });
  }
}
