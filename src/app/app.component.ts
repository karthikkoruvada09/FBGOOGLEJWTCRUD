import { Component, OnInit } from '@angular/core';
import { ServeService } from './serve.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jwt-mvc';


 token:any;
  constructor(private ser:ServeService,private router:Router,private route:ActivatedRoute){
    this.route.queryParams.subscribe((sol)=>{
        this.token=sol.token;
        if(this.token==undefined || this.token){
          localStorage.setItem('token',this.token);
        }
     })
  }

  
ngOnInit(){
      //shouldn't be kept
    

}




  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
}
