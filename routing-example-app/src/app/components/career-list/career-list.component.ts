import { Component, OnInit, Input } from '@angular/core';
import { Career } from 'src/app/models/career';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {
  careerList = new Array<Career>();

  constructor(private StudentAsyncService: StudentAsyncService) { }

  ngOnInit() {
    this.StudentAsyncService.getCareerAll()
      .then(response =>{
        this.careerList = response;
      })
      .catch(error =>{

      })
  }

}
