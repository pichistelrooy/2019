import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Career } from 'src/app/models/career';
import { StudentAsyncService } from 'src/app/services/student-async.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/components/custom-validator';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  student: Student = new Student();

  careerId : number;
  careerList = new Array<Career>();
  constructor(private studentAsyncService: StudentAsyncService) { }

  ngOnInit(): void {
    this.student.firstName = '';
    this.student.lastName = '';
    this.student.dni = '';
    this.student.email = '';
    this.student.address = '';
    this.student.careerId = null;
    this.careerId = 1;
    this.studentAsyncService.getCareerAll()
      .then(response =>{
        this.careerList = response;
      })
      .catch(error =>{

    });

    this.studentForm = new FormGroup({
      'firstName': new FormControl(this.student.firstName,
        [Validators.required, Validators.minLength(20),
        CustomValidator.forbiddenNames(/Juan/)],
        [/*ASYNC VALIDATORS*/]),
      'lastName': new FormControl(this.student.lastName),
      'email': new FormControl(this.student.email),
      'dni': new FormControl(this.student.dni),
      'address': new FormControl(this.student.address),
      'careerId': new FormControl(this.student.careerId)
    });
  }

  onSubmit(){};

  get firstName() { return this.studentForm.get('firstName');}
  get LastName() { return this.studentForm.get('lastName');}
  get dni() { return this.studentForm.get('dni');}
  get email() { return this.studentForm.get('email');}
  get address() { return this.studentForm.get('address');}
  //get careerId() { return this.studentForm.get('careerId');}

  addStudent()
  {
    let studentadd = new Student();
    studentadd.firstName = this.firstName.value;//this.student.firstName;
    studentadd.lastName = this.LastName.value;//this.lastName;
    studentadd.dni = this.dni.value;//this.student.dni;
    studentadd.email = this.email.value;
    studentadd.address = this.address.value;
    studentadd.careerId = this.careerId;

    console.log('hola' + studentadd.firstName);
    this.studentAsyncService.add(studentadd);
  }
}
