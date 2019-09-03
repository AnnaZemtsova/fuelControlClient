import {NgModule} from '@angular/core';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {SigninComponent} from './auth/components/signin/signin.component';
import {SignupComponent} from './auth/components/signup/signup.component';
import {AuthGuard} from './auth/guards/AuthGuard';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
  {path: 'signin', component: SigninComponent },
  {path : 'signup', component : SignupComponent},
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
