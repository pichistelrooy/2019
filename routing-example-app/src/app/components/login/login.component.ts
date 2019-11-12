import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidator } from 'src/app/components/custom-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  logInForm : FormGroup
  user = new User()

  constructor(private userService : UserService, private route : Router) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
      "email" : new FormControl(this.user.email, [Validators.required,CustomValidator.checkIfEmail()],[CustomValidator.checkIfEmailTakenLogin(this.userService)]),
      "password" : new FormControl(this.user.password, [Validators.required])
    })
  }

  onSubmit() {
    this.user = <User> this.logInForm.value;

    this.userService.login(this.user)
    .subscribe(
      response => {
        this.userService.token = response['jwt'];
        console.log(this.userService.token);
        if(this.userService.token){
          let redirect = this.userService.redirectUrl ? this.route.parseUrl(this.userService.redirectUrl) : '/home'
          this.route.navigateByUrl(redirect)
      }
      }, ()=> alert("ALGO ESTA PASANDO"))
  }

  get email(){
    return this.logInForm.get("email")
  }

  get password(){
    return this.logInForm.get("password")
  }

  goToSignUp(){
    this.route.navigate(['./register']);
  }
}
