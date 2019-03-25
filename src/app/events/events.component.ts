import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private ser:ServeService) { }


  data:any =[];
  ngOnInit() {
    this.ser.events().subscribe(data=>{
      this.data=data;
    })
  }

}
