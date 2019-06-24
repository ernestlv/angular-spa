import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  homeUpdate;
  myInit() {
    setTimeout(() => this.homeUpdate = "Home Updated @ "+(new Date()))
    console.log("myInit")
  }

  ngOnInit(){
    this.myInit();
  }

}
