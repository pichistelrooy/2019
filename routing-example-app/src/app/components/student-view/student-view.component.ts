//student-view.component.ts
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { StudentAsyncService } from 'src/app/services/student-async.service';

//student-view-component.ts
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  private student: Student;

  constructor(private studentAsyncService: StudentAsyncService, private route: ActivatedRoute) { }

  ngOnInit() {
    let studentId = Number(this.route.snapshot.paramMap.get('id'));

    this.studentAsyncService.getById(studentId)
      .subscribe(response => { this.student = response}, error => {console.log(error.message)})
  }

}

