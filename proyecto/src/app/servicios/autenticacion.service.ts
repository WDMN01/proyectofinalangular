import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar:boolean =false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'David' && obj.password == '12345';
    return this.ingresar;
  }
  public habilitarlogeo(){
    return this.ingresar;
  }
}
