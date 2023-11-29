import {Component} from '@angular/core';
import {AccountsService} from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService]
})
export class AppComponent {
  accounts: { name: string, status: string }[] = [];



  constructor(private accountsService: AccountsService) {}

  ngOnInit(accountsService: AccountsService) {
    this.accounts = this.accountsService.accounts
  }

}


/*
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
  */
