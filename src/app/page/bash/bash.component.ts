import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { SocketService } from '../../util/service/socket.service';
import { MessagesUtil } from '../../util/messages.util';
import { ACTION_COMMAND } from '../../command/command-list';

@Component({
  selector: 'app-terminal',
  templateUrl: './bash.component.html',
})
export class BashComponent implements OnInit {
  public user: string;

  constructor(
    private terminalService: TerminalService,
    private socketService: SocketService,
  ) { }

  public ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.terminalService.commandHandler.subscribe(command => this.onCommand(command));
    this.socketService.getMessage().subscribe(res => {
      console.log('RES: ', res);
    });
  }

  public onCommand(input: string): void {
    if (!this.isCommandoValid(this.getCommand(input))) return;
    this.applyCommand(input);
  }

  private isCommandoValid(input: string): boolean {
    const command = this.getCommand(input);

    if (!ACTION_COMMAND.hasOwnProperty(command)) {
      this.terminalService.sendResponse(MessagesUtil.COMMAND_NOT_FOUND(command))
      return false;
    }

    return true;
  }

  private applyCommand(input: string): void {
    const command = this.getCommand(input);
    const args = this.getArgs(input);

    if (command === 'user') {
      this.user = ACTION_COMMAND.user(args);
      return;
    }

    if (!this.user) {
      this.terminalService.sendResponse(MessagesUtil.USER_NOT_FOUND);
      return;
    }

    switch (command) {
      case('msg'):
        this.socketService.sendMessage(args);
        break;
      default:
        break;
    }
  }

  private getCommand(input: string): string {
    return input.split( ' ')[0]
  }

  private getArgs(input: string): string {
    return input.split(' ').slice(1).join(' ');
  }
}
