import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  greeting;
  vegetables;
  flag:boolean;
  constructor() { }

  ngOnInit() {
    this.greeting = 'welcome to angular';
    this.vegetables = [
      { name: 'tomato', price: 90 },
      { name: 'potato', price: 40 },
      { name: 'carrot', price: 30 },
      { name: 'onion', price: 20 },
      { name: 'brinjal', price: 50 },

    ]
    this.flag=true;
  }

  btnClicked() {
    //alert("got it!!!!");
    console.log(event);
  }
  toggleTable() {
this.flag =!this.flag;
  }

}
