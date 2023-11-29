import {Component} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [{ provide: LoggingService, useClass: LoggingService}]
  //providers: [LoggingService]
})
export class NewAccountComponent {

  //it automatically create an instance of LoggingService

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {

    this.accountsService.statusUpdated.subscribe(
      (status:string) => alert("New Status: " + status)
    )
    //this.loggingService = inject(LoggingService); //!!!
 }

  onCreateAccount(accountName: string, accountStatus: string) {
    //this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);


  }
}
