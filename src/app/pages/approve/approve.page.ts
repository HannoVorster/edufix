import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

import SignaturePad from 'signature_pad';
import { Approval } from 'src/app/models/approval';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.page.html',
  styleUrls: ['./approve.page.scss'],
})
export class ApprovePage implements AfterViewInit {
  signaturePad: SignaturePad;
  @ViewChild('canvas') canvasEl: ElementRef;
  signatureImg: string;

  id;
  detailed;

  mandate = '';
  comment = '';

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.id = this.route.snapshot.params.id;

    this.api.detailedApprove(this.id).subscribe((data: any) => {
      console.log(data);
      this.detailed = data;
    })
  };

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }

  submitApproval = async () => {
    const loading = await this.loadingController.create({
      message: 'Generating instruction, please wait...',
    });
    await loading.present();

    const obj: Approval = {
      id: this.id,
      approveMandate: this.mandate,
      comment: this.comment,
      user: 'test'
    };

    this.api.postApproval(obj).subscribe(async (data: any) => {
      console.log(data);

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Approval submitted.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigateByUrl('/approvals')
            }
          }
        ]
      });

      await loading.dismiss();
      await alert.present();
    }, async (error) => {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occured, please try again.',
        buttons: [
          {
            text: 'OK'
          }
        ]
      });

      await loading.dismiss();
      await alert.present();
    });
  };
}
