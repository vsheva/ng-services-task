import { Component, Input } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [{ provide: LoggingService, useClass: LoggingTestService}]
  providers: [LoggingService, AccountsService]  //we say which type of service should be used in the places where this service is injected
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  private loggingService

  //it automatically create an instance of LoggingService
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }



  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    this.loggingService.logStatusChange(status)
  }
}
