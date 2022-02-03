import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.page.html',
  styleUrls: ['./requestlist.page.scss'],
})
export class RequestlistPage implements OnInit {

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
    this.api.requestList().subscribe(data => {
      this.requests = data;
    })
  };

  openDetailed = (req) => {
    if (req.status === 'N')
      this.router.navigateByUrl(`/assess/${req.id}`)
    else
      this.router.navigateByUrl(`/detailedtabs/contractor/${req.id}`);
  };

  doRefresh = (event: any) => {
    this.loadData();
    event.target.complete();
  };

}
