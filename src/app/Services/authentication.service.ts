import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    const userData = { email, password };
    return this.http.post('/api/login', userData);
  }
}
