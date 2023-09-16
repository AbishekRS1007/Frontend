import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title='seppam';
  hide=true;
  isActive=true;
  isLogin: boolean=false;
  readData:any;
  progress = false;
  error = '';
  email = '';
  password = '';
  name = '';
  domainname = '';
  successmsg = '';
  errmsg = '';

  errorMessage:any

  valemail = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.valemail.hasError('required')) {
      return 'You must enter a value';
    }
    return this.valemail.hasError('email') ? 'Not a valid email' : '';
  }
  constructor( 
    private api: ApiserviceService, 
    private router: Router, 
    private formbuilder: FormBuilder,
    private auth:AuthenticationService,
    private http:HttpClient 
    ) { 
    }

  ngOnInit(){  
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(0);
    };
        }

  login(){
    const body = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:5000/login', body).subscribe(data => {
      this.progress=true;
      if (data.success) {
        this.successmsg = 'Login successful';
        this.router.navigate(['/main']);
      } 
      else
      {
        this.errmsg= "Login Failed...!!!"
        alert("Email or Password is incorrect or not registered...!!!")
      }
    });
  }
  
  }