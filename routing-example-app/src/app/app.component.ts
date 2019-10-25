import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserAsyncService } from 'src/app/services/user-async.service';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private token: string;

  @ViewChild('child1') login: LoginComponent;

  constructor(private UserAsyncService: UserAsyncService) { }

  ngOnInit() {
    this.login.emitEvent
    .subscribe(
      res =>
      {
        this.token = this.UserAsyncService.token;
      }
    );
  }
}

