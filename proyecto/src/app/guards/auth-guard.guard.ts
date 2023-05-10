import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private loginprd:AutenticacionService, private router: Router){}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginprd.habilitarlogeo()== true){
      console.log(this.loginprd.habilitarlogeo())
      return true
    }
    else{
    this.router.navigate(['/login']);
    console.log(this.loginprd.habilitarlogeo())
      return false;  
    }
  }
    public visualizarMenu():boolean{
      console.log(this.loginprd.habilitarlogeo())
      return this.loginprd.habilitarlogeo();
    }  
  } 
  

