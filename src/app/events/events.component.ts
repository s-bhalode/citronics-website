import { Component, OnInit } from '@angular/core';

declare var particlesJS : any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  noOfTimes = ['1', '2', '3'];

  constructor() {
   }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles.json', null);
  }

 

}
