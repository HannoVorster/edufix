import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.page.html',
  styleUrls: ['./contractor.page.scss'],
})
export class ContractorPage implements OnInit {

  id;
  detailed;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
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

}
