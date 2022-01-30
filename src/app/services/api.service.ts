import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department';

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
}
