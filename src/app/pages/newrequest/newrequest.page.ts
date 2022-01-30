import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.page.html',
  styleUrls: ['./newrequest.page.scss'],
})
export class NewrequestPage implements OnInit {

  departments: any;
  facilities: any;
  disciplines: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.dropDownValues("DP").subscribe((data: any) => {
      this.departments = data;
    });

    this.api.dropDownValues("F").subscribe((data: any) => {
      this.facilities = data;
    });

    this.api.dropDownValues("DI").subscribe((data: any) => {
      this.disciplines = data;
    });
  }

}
