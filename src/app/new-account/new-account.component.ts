import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

 private loggingService

 constructor(loggingService: LoggingService) {
   this.loggingService = loggingService
 }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStatusChange(accountStatus)
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus)
  }
}
