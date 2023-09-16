import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title='Seppam'
  isActive=true;
  isDisabled=true;
  process:boolean = false;
  albums:boolean = false;
  otobox:boolean = false;
  vms:boolean = false;
  tally:boolean = false;
  isLogin: boolean = false;
  getparamid:any;
  errorMsg: any;
  successmsg:any;
  isDisable = false;
  constructor(
    private api: ApiserviceService,  
    private router:Router,
    private route:ActivatedRoute
  ) { }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'),'getid');
    this.getparamid = this.route.snapshot.paramMap.get('id');
    if(this.getparamid > 0){
      this.isDisable=true;
    }
    
    this.api.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res, 'res==>current user data');
      this.userForm.patchValue({
        name:res.data[0].name,
        email:res.data[0].email,
        password:res.data[0].password,
        domain_name:res.data[0].domain_name
      });
    });
  }

  
  userForm = new FormGroup({
    name:new FormControl('', Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('', Validators.required),
    domain_name:new FormControl('',Validators.required)
  });
  userSubmit() { 
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.api.createData(this.userForm.value).subscribe((res)=>{
        console.log(res, 'res=>Data Inserted');
        this.userForm.reset();
      });
    }
    else{
      this.errorMsg = "All fields are required";
    }
    }

    userUpdate(){
      console.log(this.userForm.value, "User Updated");
      if(this.userForm.valid){
        this.api.updateData(this.userForm.value, this.getparamid).subscribe((res)=>{
            console.log(res, "form updated Successfully");
            alert("Data Updated Successfully");
          });
      }
      else {
        alert("Error while updating");
      }
    }


    checkProcess(){
      this.process=!this.process;
    }
    checkAlbum(){
      this.albums=!this.albums;
    }    
    checkOto(){
      this.otobox=!this.otobox;
    }    
    checkVms(){
      this.vms=!this.vms;
    }    
    checkTally(){
      this.tally=!this.tally;
    }
}

