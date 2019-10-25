import { Component, OnInit } from '@angular/core';
import { UserAsyncService } from 'src/app/services/user-async.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private UserAsyncService: UserAsyncService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  register()
  {
    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.UserAsyncService.register(user)
      .then(response =>{
        console.log(response);
        //this.route.url['/'];
      })
      .catch(error =>{
        console.log(error);
      })
  }

}
