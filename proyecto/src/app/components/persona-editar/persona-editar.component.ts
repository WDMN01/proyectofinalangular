import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit {

  mainFormGroup: FormGroup;
  persona: Persona;

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router,
    private personaService: PersonaService,
    private formBuilder: FormBuilder){

      this.mainFormGroup =formBuilder.group({
        Nombre: ["", Validators.required],
        Apellido: ["", Validators.required],
      });
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      var id = params["id"];
      this.personaService.get(id).subscribe((data:Persona)=>{
        this.persona=data;
        this.mainFormGroup.patchValue(data);
      })
    })
  }
  submitForm(){
    this.persona.Nombre = this.mainFormGroup.get("Nombre")?.value;
    this.persona.Apellido = this.mainFormGroup.get("Apellido")?.value;
    this.personaService.update(this.persona).subscribe((resp)=>{
      this.router.navigate(["persona"]);
    })
  }
}
