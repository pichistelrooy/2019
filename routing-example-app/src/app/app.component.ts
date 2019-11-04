import { Component, OnInit } from '@angular/core';
import { UserAsyncService } from 'src/app/services/user-async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private token: string;

  constructor(private UserAsyncService: UserAsyncService) { }

  ngOnInit() {
    console.log(this.token);
    this.UserAsyncService.emitEvent
    .subscribe(
      res =>
      {
        this.token = res;
        console.log(this.token);
      }
    );
  }

  tokenR(){
    console.log(this.token);
    this.token = this.UserAsyncService.token;
    console.log(this.token);
  }
}

