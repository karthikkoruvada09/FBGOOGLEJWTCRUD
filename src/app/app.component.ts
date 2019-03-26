import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ServeService } from './serve.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'jwt-mvc';


 token:any;
  constructor(private ser:ServeService,private router:Router,private route:ActivatedRoute){

  }

  
ngOnInit(){
      //shouldn't be kept removing localstorage token...
}

ngDoCheck(){
  // console.log("outside")
  // setInterval(()=>{
  //   console.log("inside")
  //   this.router.navigate(['/login']);
  // },60*1000)
}

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
}
