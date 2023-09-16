import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { PopComponent } from '../pop/pop.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  readData: any;

  constructor(private router: ActivatedRoute,
    private api: ApiserviceService,
    private pop: MatDialog,
    private route: Router) { }


  ngOnInit(): void {
    this.api.getAllData().subscribe((res) => {
      this.readData = res.data;
    });
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(0);
    };
  }
  openPop() {
    this.api.openPop();
  }
  logout() {
    this.route.navigate(['/login']);
  }
}
