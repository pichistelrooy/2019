//student.service.ts
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList = new Array<Student>();
  private studentId = 0;

  constructor() { }

  add(student: Student){
    this.studentId++;
    student.studentId = this.studentId;
    this.studentList.push(student);
  }

  getAll(){
    return this.studentList;
  }

  getById(studentId: number){
    let students = this.studentList.filter(student => {
      return student.studentId == studentId;
    });

    return (students.length > 0) ? students[0] : null;
  }  

  modify(studen: Student){
    this.studentList.filter(student => {
      if(student.studentId == studen.studentId){
        student.firstName = studen.firstName;
        student.lastName = studen.lastName;
        student.dni = studen.dni;
        student.email = studen.email;
      }
    })
  }

  remove(studentId: number){
    this.studentList.forEach(element => {
      if (element.studentId == studentId){
        this.studentList.pop();
      }  
    });
  }
}

