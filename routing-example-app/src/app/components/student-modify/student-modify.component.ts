import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.css']
})
export class StudentModifyComponent implements OnInit {
  private student: Student;
  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let studentId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.student = this.studentService.getById(studentId);
  }

  modifyStudent()
  {
    this.student.firstName = this.student.firstName;
    this.student.lastName = this.student.lastName;
    this.student.dni = this.student.dni;
    this.student.email = this.student.email;
    this.student.address = this.student.address;

    this.studentService.modify(this.student);
  }

}
