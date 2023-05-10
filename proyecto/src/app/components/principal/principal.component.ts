import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(public router: Router, private loginprd:AutenticacionService) {

  }
  public visualizarMenu():boolean{
    return this.loginprd.habilitarlogeo();
  }
}
