import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ser:ServeService,private router:Router) { }

  ngOnInit() {
     localStorage.removeItem('token');    //after logging in if user opens login again token wont be there.....so the option login after login wont be available
  }

  login(v){
    this.ser.login(v).subscribe(data=>{
      console.log(data);
      if(data){
        localStorage.setItem('token',data.token);
        this.router.navigate(['/special']);
      }},
      error=>{
        console.log(error.status);
      }
     
  
      
    )
  }

}