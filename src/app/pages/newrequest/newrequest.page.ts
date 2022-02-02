import { Component, OnInit } from '@angular/core';
import { Newrequest } from 'src/app/models/newrequest';
import { ApiService } from 'src/app/services/api.service';
import { PhotoService } from 'src/app/services/photo.service';

import { Geolocation } from '@capacitor/geolocation';
import * as moment from 'moment';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  coords: any = null;
  dateTime: any = null;

  constructor(
    private api: ApiService,
    private router: Router,
    private photoService: PhotoService,
    private loadingController: LoadingController,
    private alertController: AlertController
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

  takePhoto = async () => {
    await this.photoService.addNewToGallery();

    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates;
    this.dateTime = moment().format('yyyy-MM-DD HH:mm')

    console.log(coordinates);
  }

  generateRequest = async () => {
    const loading = await this.loadingController.create({
      message: 'Generating instruction, please wait...',
    });
    await loading.present();

    const obj: Newrequest = {
      department: this.department,
      locationRoom: this.locationRoom,
      facility: this.facility,
      discipline: this.discipline,
      newComment: this.comment,
      userCreated: 'test'
    }

    this.api.newRequest(obj).subscribe(async (data: any) => {
      console.log(data);

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Instruction successfully generated:',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigateByUrl('/hometabs')
            }
          }
        ]
      });

      await loading.dismiss();
      await alert.present();
    })
  };
}
