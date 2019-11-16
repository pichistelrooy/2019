import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { UserCredentials } from '../models/user-credentials';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'Application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'https://utn2019-avanzada2-tp8.herokuapp.com/';
  token = undefined;
  redirectUrl: string;

  constructor(private http : HttpClient) { }

  login(user : User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    let userCredentials = new UserCredentials();
    userCredentials.email = user.email;
    userCredentials.password = user.password;

    const observable = this.http.post(this.apiURL + 'login', userCredentials, httpOptions);

    observable.subscribe(
      response => {
        this.token = response['jwt'];
        localStorage.setItem('token', this.token);      
    },
      error => { 
    })
    return observable;
    //let body = JSON.stringify(user)
    //return this.http.post(this.apiURL + 'login', body, headers)
  }

  checkEmailNotTaken(email : string) : Observable<any> {
    return this.http.get<any[]>(this.apiURL + 'users/identities?email=' + email)
  }

  logout() : void {
    this.token = undefined;
  }

  signUp(user): Promise<any> {
    let body = JSON.stringify(user)
    return this.http.post(this.apiURL + 'sign-up', body, headers).toPromise()
  }
}
