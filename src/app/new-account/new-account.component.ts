import {Component, EventEmitter, inject, Output} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [{ provide: LoggingService, useClass: LoggingService}]
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

 private loggingService

  //it automatically create an instance of LoggingService

  constructor(loggingService: LoggingService) {
   this.loggingService = loggingService
    //this.loggingService = inject(LoggingService); //!!!
 }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStatusChange(accountStatus)

  }
}
