import { Injectable } from '@angular/core';
import { UserModel } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user: UserModel):boolean{
    if(user.userName=="test" && user.password=="123456"){

      this.loggedIn=true;
      localStorage.setItem("isLogged", user.userName.toString());
      return true
    }
    return false
  }

  isLoggedIn(){
    return this.loggedIn
  }

  logout(){
    localStorage.removeItem("isLogged")
    this.loggedIn=false;
  }
}
