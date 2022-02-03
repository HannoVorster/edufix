import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SignaturePad from 'signature_pad';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.page.html',
  styleUrls: ['./contractor.page.scss'],
})
export class ContractorPage implements AfterViewInit {
  signaturePad: SignaturePad;
  @ViewChild('canvas') canvasEl: ElementRef;
  signatureImg: string;

  id;
  detailed;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.id = this.route.snapshot.params.id;

    this.api.detailedContractor(this.id).subscribe((data: any) => {
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

}
