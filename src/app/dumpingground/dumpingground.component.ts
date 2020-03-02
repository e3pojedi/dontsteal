import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumpingground',
  templateUrl: './dumpingground.component.html',
  styleUrls: ['./dumpingground.component.css']
})

export class DumpinggroundComponent implements OnInit {

  constructor() { }
public innerWidth: any;
public innerHeight: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;


  }
  
}