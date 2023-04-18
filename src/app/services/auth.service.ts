import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private Router: Router) {
    if (localStorage.getItem('userToken') != null)
      this.decodeUserData()
  }

  register(userData: object): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', userData)
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', userData)
  }

  userData = new BehaviorSubject(null)

  decodeUserData() {
    let encodedData = JSON.stringify(localStorage.getItem('userToken'))
    let decodedData: any = jwtDecode(encodedData)
    this.userData.next(decodedData)
  }

  signout() {
    localStorage.removeItem('userToken');
    this.userData.next(null)
    this.Router.navigate(['/login'])
  }

}
