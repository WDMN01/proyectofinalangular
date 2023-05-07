import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona-get',
  templateUrl: './persona-get.component.html',
  styleUrls: ['./persona-get.component.css']
})
export class PersonaGetComponent {

  personas: Persona[];

  constructor(private personaservice: PersonaService){

  }

  ngOnInit(): void{
    this.personaservice.getAll().subscribe((data:Persona[])=>{
      this.personas = data;
    });
  }
  borrar(id:number){
    console.log("Borrando el "+id);
  }

}
