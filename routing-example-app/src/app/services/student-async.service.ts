//student.service.ts
import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private apiURL = 'https://utn2019-avanzada2-tp8.herokuapp.com/api/students';
  constructor(private http: HttpClient) { }

  private studentList = new Array<Student>();

  add(student: Student): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.post(this.apiURL, student, httpOptions)
      .toPromise();
  }

  getAll() : Promise<any>{
    return this.http.get(this.apiURL)
      .toPromise();
  }

  getById(studentId: number): Promise<any>{
    return this.http.get(this.apiURL + '/' + studentId)
      .toPromise();
  }  

  modify(student: Student): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8'
      })
    };
    return this.http.patch(this.apiURL + '/'  + student.studentId, student, httpOptions)
      .toPromise();
  }
}

