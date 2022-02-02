import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Assessment } from 'src/app/models/assessment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assess',
  templateUrl: './assess.page.html',
  styleUrls: ['./assess.page.scss'],
})
export class AssessPage implements OnInit {
  id;
  detailed;


  responseTime = '';
  emergencyNormal = '';
  comment = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.id = this.route.snapshot.params.id;

    this.api.detailedAssess(this.id).subscribe((data: any) => {
      console.log(data);
      this.detailed = data;
    })
  };

  submitAssessment = async () => {
    const loading = await this.loadingController.create({
      message: 'Generating instruction, please wait...',
    });
    await loading.present();

    const obj: Assessment = {
      id: this.id,
      responseTime: this.responseTime,
      emergencyNormal: this.emergencyNormal,
      comment: this.comment,
      user: 'test'
    };

    this.api.postAssessment(obj).subscribe(async (data: any) => {
      console.log(data);

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Assessment submitted for instruction',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigateByUrl('/requestlist')
            }
          }
        ]
      });

      await loading.dismiss();
      await alert.present();
    });
  };

}
