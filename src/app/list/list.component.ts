import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../services/people.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ps: PeopleService) { }

  ngOnInit() {
    this.people =   this.ps.getUsers()
  }

}