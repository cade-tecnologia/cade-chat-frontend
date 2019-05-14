import { Component } from '@angular/core';
import {TerminalService} from 'primeng/components/terminal/terminalservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public user = 'jefferson';

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {
        let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
        this.terminalService.sendResponse(response);
    });
}
}
