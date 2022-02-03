import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.page.html',
  styleUrls: ['./approvals.page.scss'],
})
export class ApprovalsPage implements OnInit {

  term = '';

  requests = null;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {
    this.api.approvalsList().subscribe(data => {
      this.requests = data;
    })
  };

  openDetailed = (req) => {
    this.router.navigateByUrl(`/approve/${req.id}`)
  }

  doRefresh = (event: any) => {
    this.loadData();
    event.target.complete();
  };

}
