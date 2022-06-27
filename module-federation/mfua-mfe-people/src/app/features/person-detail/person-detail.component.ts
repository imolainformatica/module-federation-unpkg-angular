import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../../model/person";
import {PeopleService} from "../../core/services/people.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person = new Observable<Person>();

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.person = this.peopleService.getPerson(id);
  }

}
