import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department';
import { Newrequest } from '../models/newrequest';
import { Requestlist } from '../models/requestlist';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:7237/api'

  constructor(
    private http: HttpClient
  ) { }

  /*
    * Dropdowns...
  */
  dropDownValues(type: string) {
    return this.http.get<Department>(`${this.apiUrl}/dropdown/${type}`);
  }

  /*
    * Requests...
  */
  newRequest(obj: Newrequest) {
    return this.http.post(`${this.apiUrl}/request/newrequest`, obj);
  }

  requestList() {
    return this.http.get<Requestlist>(`${this.apiUrl}/request/requestlist`);
  }
}
