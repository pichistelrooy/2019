import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'signup', component : SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
