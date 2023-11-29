import {Component, EventEmitter, inject, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [{ provide: LoggingService, useClass: LoggingService}]
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

 private loggingService

  //it automatically create an instance of LoggingService

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    //this.loggingService = inject(LoggingService); //!!!
 }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus)

  }
}
