import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';

declare var particlesJS : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value : any = false;
  bgColor : any = "transparent";
  color : any = "transparent";
  position : any ;
  top : any;
  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles.json', null);
  }
  // showHeader(){
  //   this.value = true;
  //   this.bgColor = "aqua";
  //   this.color = "navy";
  //   this.position = "relative";
  //   this.top = "90%";
    
  // }

}
