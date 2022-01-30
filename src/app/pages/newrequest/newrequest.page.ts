import { Component, OnInit } from '@angular/core';
import { Newrequest } from 'src/app/models/newrequest';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.page.html',
  styleUrls: ['./newrequest.page.scss'],
})
export class NewrequestPage implements OnInit {

  // Dropdown values...
  departments: any;
  facilities: any;
  disciplines: any;

  // Inputs...
  department = '';
  locationRoom = '';
  facility = '';
  discipline = '';
  comment = '';

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.api.dropDownValues("DP").subscribe((data: any) => {
      this.departments = data;
    });

    this.api.dropDownValues("F").subscribe((data: any) => {
      this.facilities = data;
    });

    this.api.dropDownValues("DI").subscribe((data: any) => {
      this.disciplines = data;
    });
  };

  generateRequest = () => {
    const obj: Newrequest = {
      department: this.department,
      locationRoom: this.locationRoom,
      facility: this.facility,
      discipline: this.discipline,
      newComment: this.comment,
      userCreated: 'test'
    }

    this.api.newRequest(obj).subscribe((data: any) => {
      console.log(data);
    })
  };
}
