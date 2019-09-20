import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './employee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url='/assets/data/employees.json';

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Iemployee[]>
{
  return this.http.get<Iemployee[]>(this. _url);
}
}
