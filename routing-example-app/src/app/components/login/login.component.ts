import { Component, Input  } from '@angular/core';
import { UserAsyncService } from 'src/app/services/user-async.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private UserAsyncService: UserAsyncService) { }

  login()
  {
    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.UserAsyncService.login(user)
      .then(response =>{
        this.UserAsyncService.token = response.jwt;
        console.log(this.UserAsyncService.token);
      })
      .catch(error =>{
        console.log(error);
      })
  }
}
