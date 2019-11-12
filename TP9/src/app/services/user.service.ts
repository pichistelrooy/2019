import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

// Create an Observable out of a promise
const data = from(fetch(this.apiURL + 'users/identities'));
// Subscribe to begin listening for async result
data.subscribe(
    {
        next(response) { 
            console.log(response); 
        },
        error(err) { 
            console.error('Error: ' + err); 
        },
        complete() { 
            console.log('Completed'); 
        }
});

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private apiURL = 'https://utn2019-avanzada2-tp9.herokuapp.com/';
    constructor(private http: HttpClient) { }
  
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

    checkEmailNotTaken(email: string) {
        data.
      }

  }
  