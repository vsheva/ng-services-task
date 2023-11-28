import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  private loggingService

  constructor(loggingService: LoggingService) {
    this.loggingService = loggingService
  }



  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);

    this.loggingService.logStatusChange(status)
  }
}
