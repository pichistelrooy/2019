import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Career } from 'src/app/models/career';
import { StudentAsyncService } from 'src/app/services/student-async.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.css']
})
export class StudentModifyComponent implements OnInit {
  private student: Student;
  careerList = new Array<Career>();
  constructor(private studentAsyncService: StudentAsyncService, private route: ActivatedRoute) { }

  ngOnInit() {
    let studentId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.studentAsyncService.getById(studentId)
      .subscribe(response => { this.student = response}, error => {console.log(error.message)})
  }

  editStudent() {
    this.studentAsyncService.patch(this.student).subscribe(()=> {alert("Modificado con exito!")}, error => {console.log(error.message)})
  }

}
