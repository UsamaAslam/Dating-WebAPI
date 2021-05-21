import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the dating app';
  users: any;

  constructor(private accountService: AccountService){}
  ngOnInit(){
    this.setCurrentUser();
  }

  setCurrentUser(){
       const user:User = JSON.parse(localStorage.getItem('user') || '{}');
       this.accountService.setCurrentUser(user);

      //  const user:User;

      //  const userJson = localStorage.getItem('user');
      //  user = userJson !== null ? JSON.parse(userJson) : new User();

      //  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
