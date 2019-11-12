import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
//import { Career } from 'src/app/models/career';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList = new Array<Student>();
  students = new Array<Student>()
  //careers = new Array<Career>()

  constructor(private studentAsyncService: StudentAsyncService) { }

  ngOnInit() {
    this.retrieveData()
  }

  retrieveData(){
    this.studentAsyncService.getAll()
      .subscribe(response => {
          this.students = response as Student[];
          this.mergeData();
      },
      error => {
        console.log(error.message)
      })
  }

  remove(studentId: number){
    this.studentAsyncService.deleteById(studentId).subscribe(data=> console.log(data))
    this.retrieveData();
  }

  mergeData() {
    this.students.forEach(element => {
      this.studentList.push(element);
    })
  }

}
