import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/components/custom-validator';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faTimes = faTimes;
  faCheckCircle = faCheckCircle;
  signUpForm : FormGroup
  user = new User() 
  constructor(private userService : UserService,private route : Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup ({
      "email" : new FormControl(this.user.email, 
        [Validators.required,CustomValidator.checkIfEmail()],
        [CustomValidator.checkIfEmailNotTakenSignUp(this.userService)]),
      "password" : new FormControl(this.user.password, 
        [Validators.required])
    })
  }
  
  onSubmit(){
      this.user = <User> this.signUpForm.value;
      this.userService.signUp(this.user)
      .then(()=> alert('Registro con Exito!'))
      .catch(()=> alert('Error en Registro!'))
      this.signUpForm.reset();
  }

  get email(){
    return this.signUpForm.get("email");
  }

  get password(){
    return this.signUpForm.get("password")
  }

  goToLogIn(){
    this.route.navigate(['./login']);
  }

}
