import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  constructor(private userService : UserService, private route: Router) { }

  ngOnInit() {
  }

  logout() : void{
    this.userService.logout();

    setTimeout(() => {
      this.route.navigateByUrl('/login');      
    }, 2000);     
  }

}
