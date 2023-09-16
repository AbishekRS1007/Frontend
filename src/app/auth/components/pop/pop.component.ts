import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { withInterceptors } from '@angular/common/http';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css',],
  styles:[ '.mat-dialog-container { background-color: white;}',]
})
export class PopComponent implements OnInit {

  readData:any;
  ispopupopen = true;


  constructor(private api:ApiserviceService,
    private route:ActivatedRoute,
    private router:Router){}


  ngOnInit(): void {
    this.api.getAllData().subscribe((res)=>{
      console.log(res, "Get data");
      this.readData= res.data;
  });
}

update(){
  this.ispopupopen=false;
  this.router.navigate(['/update',this.readData[0].id])
}
}
