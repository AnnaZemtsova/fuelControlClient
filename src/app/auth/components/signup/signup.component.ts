import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromUser from '../../../user/reducers/user.reducer';
import {UserActions} from '../../../user/actions/user.actions';
import {User} from '../../../user/models/user';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(){}

  ngOnInit() {


  }


}
