import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Career } from 'src/app/models/career';
//import { StudentService } from 'src/app/services/student.service';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  firstName : string;
  lastName : string;
  dni : string;
  email : string;
  address : string;
  careerid : number;

  careerList = new Array<Career>();

  constructor(private studentAsyncService: StudentAsyncService) { }

  ngOnInit() {
    this.studentAsyncService.getCareerAll()
      .then(response =>{
        this.careerList = response;
      })
      .catch(error =>{

      })
  }

  addStudent()
  {
    let student = new Student();
    student.firstName = this.firstName;
    student.lastName = this.lastName;
    student.dni = this.dni;
    student.email = this.email;
    student.address = this.address;
    student.careerId = this.careerid;

    this.studentAsyncService.add(student);
  }
}
