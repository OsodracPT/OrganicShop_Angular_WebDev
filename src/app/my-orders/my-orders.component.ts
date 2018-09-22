import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  form = new FormGroup({
    account:new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique
      ]),
      password: new FormControl('', Validators.required)
    })
  });

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.form.setErrors({
      invalidLogin:true
    });    
  }

  get username() {
    return this.form.get('account.username');
  }
}
