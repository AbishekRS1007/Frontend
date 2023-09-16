import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {
isActive=true;
progress = false;

constructor(private router:Router){}

  ngOnInit(): void {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(0);
    };
  }
loading(){
  this.progress= true;

}
}
