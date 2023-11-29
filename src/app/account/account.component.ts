import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [{ provide: LoggingService, useClass: LoggingTestService}]
  providers: [LoggingService] //we say which type of service should be used in the places where this service is injected
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  private loggingService

  //it automatically create an instance of LoggingService
  constructor(loggingService: LoggingService) {
    this.loggingService = loggingService
  }



  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});

    this.loggingService.logStatusChange(status)
  }
}
