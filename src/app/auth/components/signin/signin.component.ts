import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import * as fromAuth from '../../reducers/auth.reducer';
import {AuthActions} from '../../actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(){}
  ngOnInit() {

  }


}
