import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  login = {
    email: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.login);

      console.log(result);
      this.router.navigate(['']);

    } catch (error) {
      console.error(error);
    }
  }

}
