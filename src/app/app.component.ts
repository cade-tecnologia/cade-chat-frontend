import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { Observable } from 'rxjs';
import { ACTION_COMMAND } from './command/list.command';
import { MessageUtil } from './util/message.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public user = 'jefferson';

  constructor(private terminalService: TerminalService) {
  }

  public ngOnInit(): void {
    this.onCommand(this.terminalService.commandHandler);
  }

  private onCommand(command$: Observable<string>): void {
    command$.subscribe(command => {
      this.callAction(command.split(' '));
    });
  }

  private callAction(args: string[]): void {
    const command = args[0];

    if (!ACTION_COMMAND.hasOwnProperty(command[0])) {
      this.terminalService.sendResponse(MessageUtil.getUnknowCommand(command));
    }
    const action = ACTION_COMMAND[command];

    action()

  }
}
