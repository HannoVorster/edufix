import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department';
import { Newrequest } from '../models/newrequest';
import { Requestlist } from '../models/requestlist';
import { Assessment } from '../models/assessment';
import { Approval } from '../models/approval';

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
  newRequest = (obj: Newrequest) => {
    return this.http.post(`${this.apiUrl}/request/newrequest`, obj);
  };

  requestList = () => {
    return this.http.get<Requestlist>(`${this.apiUrl}/request/requestlist`);
  };

  approvalsList = () => {
    return this.http.get<Requestlist>(`${this.apiUrl}/request/approvalslist`);
  };

  detailedAssess = (id: string) => {
    return this.http.get(`${this.apiUrl}/request/detailedassess/${id}`);
  };

  detailedApprove = (id: string) => {
    return this.http.get(`${this.apiUrl}/request/detailedapprove/${id}`);
  };

  detailedContractor = (id: string) => {
    return this.http.get(`${this.apiUrl}/request/detailedcontractor/${id}`);
  };

  postAssessment = (obj: Assessment) => {
    return this.http.post(`${this.apiUrl}/request/assessment`, obj);
  };

  postApproval = (obj: Approval) => {
    return this.http.post(`${this.apiUrl}/request/approval`, obj);
  };
}
