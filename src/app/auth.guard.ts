import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ServeService } from './serve.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  

  constructor(private ser:ServeService,private router:Router){}

  canActivate():boolean {

    if(this.ser.getToken()){
    return true;
    }
    this.router.navigate(['/login'])
    return false;
    
  }
}
