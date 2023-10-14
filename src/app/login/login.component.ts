import { Component } from '@angular/core';
import { UserModel } from './user';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private accountService: AccountService) {

  }

  user: UserModel = new UserModel();

  login(form: NgForm) {
    this.accountService.login(this.user)
  }
}
