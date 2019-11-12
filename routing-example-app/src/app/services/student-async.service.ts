//student.service.ts
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'Application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private apiURL = 'https://utn2019-avanzada2-tp8.herokuapp.com/api/students';
  private apiURLCareer = 'https://utn2019-avanzada2-tp8.herokuapp.com/api/careers';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiURL)
  }

  getById(studentId): Observable<any> {
    return this.http.get(this.apiURL + '/' + studentId)
  }

  add(student): Observable<any> {
    let body = JSON.stringify(student);
    return this.http.post(this.apiURL, body, headers)
  }

  patch(student: Student): Observable<any> {
    let body = JSON.stringify(student);
    console.log(body);
    return this.http.patch(this.apiURL + '/'  + student.studentId, body, headers)
  }

  deleteById(studentId : number) : Observable<any> {
    return this.http.delete(this.apiURL + '/' + studentId)
  }

  getCareerAll(): Observable<any> {
    return this.http.get(this.apiURLCareer)
  }

  /*add(student: Student): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.apiURL, student, httpOptions)
      .toPromise();
  }*/

 /* getCareerAll() : Promise<any>{
    return this.http.get(this.apiURLCareer)
      .toPromise();
  }*/

  /*checkStudentEmail(email: string): Promise<any>{
    return this.http.get(this.apiURL + '/identities?email=' + email).toPromise();
  }

  checkStudentDNI(dni: string): Promise<any>{
    return this.http.get(this.apiURL + '/identities?dni=' + dni).toPromise();
  }*/
}

