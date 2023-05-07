import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = "http://localhost:3000/personas"

  constructor(private  httpClient: HttpClient) { }

  getAll():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url);
  }

  update(persona: Persona){
    return this.httpClient.put(this.url +"/"+ persona.id, persona);
  }
  get(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.url+"/"+id);
  }
}
