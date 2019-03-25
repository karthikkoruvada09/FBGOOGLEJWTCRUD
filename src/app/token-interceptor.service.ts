import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ServeService } from './serve.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private injector:Injector){}

  intercept(req,next){
    let serservice=this.injector.get(ServeService)
    let tokenizedrequest=req.clone({
      setHeaders :{
        Authorization : `Bearer ${serservice.getToken()}`
      }
    })
    return next.handle(tokenizedrequest);

  }
}
