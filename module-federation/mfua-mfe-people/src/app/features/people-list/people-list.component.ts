import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../model/person";
import {PeopleService} from "../../core/services/people.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people = new Observable<Person[]>;

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

}
