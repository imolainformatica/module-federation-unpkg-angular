import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Person} from "../../model/person";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient
  ) { }


  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.baseURL + 'data');
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(environment.baseURL + 'data/' + id);
  }
}
