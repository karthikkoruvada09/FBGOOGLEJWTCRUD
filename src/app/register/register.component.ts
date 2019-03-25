import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ser:ServeService) { }

  ngOnInit() {
  }

  register(v){
    
    this.ser.register(v).subscribe(data=>{
      console.log(data);
    });
  }
}
