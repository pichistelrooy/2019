import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAsyncService {
  @Output() emitEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  private apiURL = 'https://utn2019-avanzada2-tp8.herokuapp.com/';
  constructor(private http: HttpClient) { }

  public token: string;

  login(user: User): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.apiURL + 'login', user, httpOptions)
      .toPromise();
  }

  register(user: User): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.apiURL + 'sign-up', user, httpOptions)
      .toPromise();
  }
}
