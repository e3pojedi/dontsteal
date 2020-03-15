import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addlicense',
  templateUrl: './addlicense.component.html',
  styleUrls: ['./addlicense.component.css']
})



export class AddlicenseComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'L', viewValue: 'Learners'},
    {value: 'P1', viewValue: 'Provisional P1'},
    {value: 'P2', viewValue: 'Provisional P2'},
    {value: 'C', viewValue: 'Full License'}
  ];

}