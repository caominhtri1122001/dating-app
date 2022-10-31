import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppUser } from './_models/app-user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(
    public accountService: AccountService) 
  { }

  ngOnInit(): void {
    this.accountService.relogin();
  }
}
