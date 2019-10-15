import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
//import { StudentService } from 'src/app/services/student.service';
import { StudentAsyncService } from 'src/app/services/student-async.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.css']
})
export class StudentModifyComponent implements OnInit {
  private student: Student;
  constructor(private studentAsyncService: StudentAsyncService, private route: ActivatedRoute) { }

  ngOnInit() {
    let studentId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.studentAsyncService.getById(studentId)
      .then(response =>{
        this.student = response;
      })
      .catch(error =>{

      })
  }

  modifyStudent()
  {
    this.student.firstName = this.student.firstName;
    this.student.lastName = this.student.lastName;
    this.student.dni = this.student.dni;
    this.student.email = this.student.email;
    this.student.address = this.student.address;

    this.studentAsyncService.modify(this.student);
  }

}
