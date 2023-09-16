import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopComponent } from './auth/components/pop/pop.component';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl = 'http://localhost:5000/users';

  constructor(private http:HttpClient,
              private pop:MatDialog) { }

  getAllData():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  // create data

  createData(data:any):Observable<any>{
    console.log(data, 'createApi');
  return this.http.post(`${this.apiUrl}`,data);
  }

  updateData(data:any, id:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  getSingleData(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  openPop(){
    this.pop.open(PopComponent, {
      width: "500px", height:"300px",panelClass:'mat-dialog-container'
    });
  }
}
