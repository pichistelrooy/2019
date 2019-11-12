//app-routing.module.ts
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentModifyComponent } from './components/student-modify/student-modify.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '',pathMatch: 'full', redirectTo: 'list'},
      { path: 'add', component: StudentAddComponent },
      { path: 'view/:id', component: StudentViewComponent },
      { path: 'list', component: StudentListComponent },
      { path: 'career', component: CareerListComponent },  
      { path: '**', component: PageNotFoundComponent }
    ] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

